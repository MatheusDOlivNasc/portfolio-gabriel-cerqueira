import './header.scss';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Read } from '../../data/environment'
import { useEffect, useState } from 'react';

const instagram = "https://firebasestorage.googleapis.com/v0/b/portifolio-gabriel-cerqueira.appspot.com/o/support%2Finstagram.png?alt=media&token=bf91a9a0-0b2e-4cfc-adda-252b15549300"
const behance = "https://firebasestorage.googleapis.com/v0/b/portifolio-gabriel-cerqueira.appspot.com/o/support%2Fbehance.png?alt=media&token=950ce698-c85c-41bf-b283-1bd5534f05d4"
const logo = "https://firebasestorage.googleapis.com/v0/b/portifolio-gabriel-cerqueira.appspot.com/o/support%2Flogo%202.svg?alt=media&token=e1e2f9b3-7b3c-4f64-abb4-3db835424d97"

export function Header() {
  let [header, setHeader] = useState<any>([])

  let [side, setSide] = useState<string>('')
  let [menu, setMenu] = useState<string>('menu')

  useEffect(() => {
    Read('Social')
      .then((res: any) => {
        if(res.length > 0) {
          res = res.filter((s: any) => {
            if(s.name.toLowerCase() == "behance" || s.name.toLowerCase() == "instagram") {
              return s
            }
          })
          setHeader(res)
        }
      })
      console.log()
  }, [])

  const initSide = () => {
    if (window.innerWidth > 770) return
    if(side == '')  {
      setSide('nav-bar')
      setMenu('close')
    } else {
      setSide('')
      setMenu('menu')
    }
  }

  return (
    <header className={side}>
      <div className="logo">
        <Link to='/'>
          <img src={logo} alt="logo Gabriel Cerqueira" />
        </Link>
      </div>
      <span className="spacer"></span>
      <div className="side-btn open">
        <button
          onClick={initSide}
          className='btn-side'
          type='button'>
          <span className="material-symbols-outlined">
            {menu}
          </span>
        </button>
      </div>
      <ul className='side-bar'>
        <li><Link to='/' onClick={initSide}>Projetos</Link></li>
        <li><Link to='about' onClick={initSide}>Sobre mim</Link></li>
        <li><Link to='contact' onClick={initSide}>Contato</Link></li>
        {
          header.map((res: any) => {
            return (
              res.url ?
              <li key={res.name}>
                <a
                  href={res.url}
                  target="_blank" className="icon">
                  <img
                    src={res.name.toLowerCase() == 'instagram' ? instagram : behance}
                    alt={res.name} />
                </a>
              </li> :
              null
            )
          })
        }
      </ul>
    </header>
  )
}