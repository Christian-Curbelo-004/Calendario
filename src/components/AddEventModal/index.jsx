import Modal from "../Modal";
import Input from "../Input";

import "./AddEventModal.css";
import { useCallback, useState } from "react";
import generateRandomHex from "../../utils/generateRandomHex";
import saveEventService from "../../services/saveEvent";

const FORM_INPUTS = Object.freeze([
  {
    label: "Título",
    id: "title",
    type: "string",
    Component: Input,
    initialValue: "",
  },
  {
    label: "Fecha",
    id: "date",
    type: "date",
    Component: Input,
    initialValue: "",
  }, // evaluar cambiar a una libreria datepicker o custom DatePicker
  {
    label: "Hora Inicio",
    id: "startTime",
    type: "time",
    Component: Input,
    initialValue: "",
  },
  {
    label: "Hora Fin",
    id: "endTime",
    type: "time",
    Component: Input,
    initialValue: "",
  },
  {
    label: "Color",
    id: "color",
    type: "color",
    Component: Input,
    initialValue: generateRandomHex(),
  },
]);

const getFormInitialState = (formInputs) => {
  const values = {};

  formInputs.forEach(({ id, initialValue }) => {
    values[id] = initialValue;
  });

  return values;
};

const getMinutesFromTime = (time) => {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
};

const validateFormState = (values) => {
  const requiredFields = Object.keys(values);

  for (const field of requiredFields) {
    const fieldValue = values[field];

    if (!fieldValue || !fieldValue.trim()) {
      return "Todos los campos son obligatorios.";
    }
  }

  const startInMinutes = getMinutesFromTime(values.startTime);
  const endInMinutes = getMinutesFromTime(values.endTime);

  if (endInMinutes < startInMinutes) {
    return "La hora fin no puede ser menor que la hora inicio.";
  }

  return null;
};

export function AddEventModal({ isOpen, onClose, afterSubmit }) {
  const [formState, setFormState] = useState(getFormInitialState(FORM_INPUTS));
  const [errorMessage, setErrorMessage] = useState(null);

  const onCloseModalHandler = () => {
    onClose();
  };

  const onSubmitSaveEventHandler = useCallback(
    (event) => {
      event.preventDefault();

      const validationError = validateFormState(formState);

      if (validationError) {
        setErrorMessage(validationError);
        return;
      }

      saveEventService(formState)
        .then(() => {
          setErrorMessage(null);
          setFormState(getFormInitialState(FORM_INPUTS));

          if (afterSubmit) {
            afterSubmit();
          }
        })
        .catch((err) => {
          console.log("err", err.message);

          setErrorMessage(err.message);
        });
    },
    [formState, afterSubmit],
  );

  console.log("error", errorMessage);

  const onChangeInputHandler = useCallback((event) => {
    const { id, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onCloseModalHandler}>
      <form className="form" onSubmit={onSubmitSaveEventHandler}>
        {FORM_INPUTS.map(
          // eslint-disable-next-line no-unused-vars
          ({ label, id, type, Component, initialValue: _, ...props }) => (
            <label htmlFor={id} key={id}>
              {label}&nbsp;
              <Component
                id={id}
                name={id}
                type={type}
                value={formState[id]}
                onChange={onChangeInputHandler}
                {...props}
              />
            </label>
          ),
        )}
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className="buttons">
          <button type="submit">Guardar Evento</button>
          <button onClick={onCloseModalHandler} type="button">
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
}
