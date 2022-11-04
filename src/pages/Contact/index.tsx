import { useEffect, useState } from 'react';
import { ContactForm } from '../../components/ContactForm';
import { Read } from '../../data/environment';
import './contact.scss';

export function Contact() {
  let [contact, setContact] = useState<string[]>([])

  useEffect(() => {
    Read('Social')
      .then((res: any) => {
        setContact(res)
      })
  }, [])

  return (
    <div className='page'>
      <h1>Contato</h1>
      <div className='content'>
        <ul className='contact-list'>
          {
            contact ?
            contact.map((i: any) => {
              return (
                <li key={i.name}>
                  <h2>{i.name}</h2>
                  {
                    !i.url ?
                    <p>{i.data}</p> :
                    <a href={i.url} target="_Blank">
                      <p>{i.data}</p>
                    </a>
                  }
                </li>
              )
            }) :
            null
          }
        </ul>
        <ContactForm />
      </div>
    </div>
  )
}

