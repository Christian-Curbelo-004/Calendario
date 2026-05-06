import Modal from "../Modal";
import Input from "../Input";

import "./AddEventModal.css";
import { useState } from "react";

const FORM_INPUTS = [
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
    type: "date",
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
];

const getFormInitialState = (formInputs) => {
  const values = {};

  formInputs.forEach(({ id, initialValue }) => {
    values[id] = initialValue;
  });

  return values;
};

export function AddEventModal({ isOpen, onClose }) {
  const [formState, setFormState] = useState(getFormInitialState(FORM_INPUTS));

  const onCloseModalHandler = () => {
    onClose();
  };

  const onSaveEventHandler = () => {};

  const onChangeInputHandler = (event) => {
    const { id, value } = event.target;

    console.log(id, value);
    

    setFormState((prevState) => ({
      [id]: value,
      ...prevState,
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseModalHandler}>
      <form className="form">
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
        <div className="buttons">
          <button onClick={onSaveEventHandler}>Guardar Evento</button>
          <button onClick={onCloseModalHandler}>Cancelar</button>
        </div>
      </form>
    </Modal>
  );
}
