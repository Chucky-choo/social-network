import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


function Dialogs(props) {
  let newMassegElement = React.createRef()
  let onAddMessage = () => {
    props.addMessage()
  }

  let onObserveNewValue = () => {
    let text = newMassegElement.current.value
    props.observeNewValue(text)
  }

  let dial = props.dialog.dialogsDate.map(el =>
    <Dialog name={el.name}
            key={el.id}
    />);

  let mes = props.dialog.messagesDate.map(el =>
    <Message message={el.message}
           key={el.id}
    />);

  return (
    <div className={s.main}>
      <div className={s.dialogs}>
        {dial}
      </div>
      <div className={s.messages}>
        {mes}
        <div className="btn-group">
          <input type="text"
                 value={props.dialog.newMessageValue}
                 placeholder={"add message"}
                 ref={newMassegElement}
                 onChange={onObserveNewValue}
                 className="form-control"
          />
          <button onClick={onAddMessage} className="btn btn-secondary">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;




