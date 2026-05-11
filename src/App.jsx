import './App.css'
import { mesesPropiedades } from './mes/meses';
import { useEffect, useState } from "react";
import "./App.css";
import { get } from "./services/api";
import useModal from "./hooks/useModal";
import { AddEventModal } from "./components/AddEventModal";
import calendario from "./mes/calendario";
import meses from './mes/meses'
import Mes from './mes/Calendario' // archivo renombrado a calendario.jsx
import Semana from './semana/Semana.jsx';

function AddEventContainerPlaceholder() {
  const { isOpen, open: openModal, close: closeModal } = useModal(false);
  const onClickAddEvent = () => {
    openModal();
  };

  const onClickCloseModal = () => {
    console.log(closeModal);

    closeModal();
  };

  console.log(isOpen);

  return (
    <>
      <AddEventModal isOpen={isOpen} onClose={onClickCloseModal} />
      <p>Placeholder para contenedor de Add Event</p>

      <button type="button" className="counter" onClick={onClickAddEvent}>
        Agregar Evento
      </button>
    </>
  );
}

function App() {
  return (
    <section>
      <div className="App">
      <h1>Calendario</h1>
      {/* <Mes mes={mesesPropiedades} />  */}
      <calendario/>
     {/*  <Semana />  */}
    </div>
    </section>
    
  );
}

export default App;


/*
 <>
      <section id="center">
        
        <div>
          <h1>Calendario</h1>
        </div>
        <AddEventContainerPlaceholder />
      </section>

      <section id="next-steps">
       <calendario />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  
*/