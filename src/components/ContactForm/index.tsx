import { useRef, useState } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  let form: any = useRef(null)
  let [error, setError] = useState<any>({
    value: false,
    text: ""
  })
  let data

  const SendEmail = (event: any) => {
    event.preventDefault();
    setError({
      value: false,
      text: ''
    })
    emailjs.sendForm(
      'service_yqd00ia',
      'template_do488xc',
      form.current,
      'Hhnb1MXmfTBeKGYEe'
    )
      .then(res => setError({
        value: true,
        text: 'Enviado com sucesso.'
      }))
      .catch(error => setError({
        value: true,
        text: 'Algo deu errado, tente novamente.'
      }))
  }

  return (
    <form className='emailform' ref={form} onSubmit={SendEmail}>
      <div className='input'>
        <label htmlFor="name">Nome*</label>
        <input name='user_name' id='name' type="text" required/>
      </div>
      <div className='input'>
        <label htmlFor="email">Email*</label>
        <input name='user_email' id='email' type="email" required/>
      </div>
      <div className='input'>
        <label htmlFor="message">Mensagem*</label>
        <textarea name="message" id="message" cols={30} rows={15} required></textarea>
      </div>
      {
        error.value == true ?
        <p className='error'>{error.text}</p> : 
        null
      }
      <button className='btn' type='submit'>Enviar</button>
    </form>
  )
}

