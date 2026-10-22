import { useState } from 'react';
export default function Chat({contact, message, dispatch}) {
    function chat(){
        dispatch({
            type: 'sent_message',
            message: message
        });
    }
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button onClick={chat}>Send to {contact.email}</button>
    </section>
  );
}