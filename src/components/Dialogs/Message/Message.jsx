import s from './Message.module.css';

export const Message = ({id, message}) => {
  return (
    <div className={s.masegs} id={id}>{message}</div>
  );
}



