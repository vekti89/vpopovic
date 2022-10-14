import { useState } from 'react';
import { send } from 'emailjs-com';

import './ContactForm.css';

import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ContactForm(props) {
  const { isDarkMode } = useContext(ThemeContext);

  const { REACT_APP_service_id, REACT_APP_template_id, REACT_APP_user_id } =
    process.env;

  //const [sendingMessage, setSendingMessage] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
    sendingMessage: false,
    messageSent: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(REACT_APP_service_id, REACT_APP_template_id, toSend, REACT_APP_user_id)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    setToSend({
      from_name: '',
      message: '',
      reply_to: '',
      sendingMessage: true,
      messageSent: false,
    });

    //setting timeout for the button
    setTimeout(() => {
      setToSend({
        from_name: '',
        message: '',
        reply_to: '',
        messageSent: true,
        sendingMessage: false,
      });
      console.log('end', toSend.sendingMessage);
    }, 1500);

    setTimeout(() => {
      setToSend({
        from_name: '',
        message: '',
        reply_to: '',
        messageSent: false,
        sendingMessage: false,
      });
      console.log('end', toSend.messageSent);
    }, 3500);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <main
      className='ContactForm'
      style={{
        backgroundColor: isDarkMode
          ? 'var(--box-bg-dark)'
          : 'var(--box-bg-light)',
      }}
    >
      <h4 className='px-2'>Contact me</h4>

      <form onSubmit={onSubmit} className='p-2'>
        <label htmlFor='name'>Your Name</label>
        <input
          id='name'
          type='text'
          name='from_name'
          value={toSend.from_name}
          onChange={handleChange}
          required
        />

        <label htmlFor='email'>Your Email</label>

        <input
          id='email'
          type='email'
          name='reply_to'
          value={toSend.reply_to}
          onChange={handleChange}
          required
        />

        <label htmlFor='message'>Your Message For Me</label>

        <textarea
          id='message'
          style={{ height: '90px' }}
          type='text'
          name='message'
          value={toSend.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type='submit'
          disabled={toSend.sendingMessage}
          className={
            toSend.messageSent
              ? 'thankYou'
              : toSend.sendingMessage
              ? 'sending'
              : ''
          }
        >
          {toSend.messageSent
            ? 'MESSAGE SENT ... THANK YOU !'
            : toSend.sendingMessage
            ? 'SENDING...'
            : 'Send Message'}
        </button>
      </form>
    </main>
  );
}
