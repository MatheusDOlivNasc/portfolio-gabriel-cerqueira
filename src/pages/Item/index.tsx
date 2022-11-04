import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';
import { Read } from '../../data/environment';
import './item.scss';

export function Item() {
  let { id } = useParams();
  let [proj, setProj] = useState<any>([])

  useEffect(() => {
    Read('Projects')
      .then((res: any) => {
        res = res.filter((i: any)=> {
          if(i.url == id) {
            return i
          }
        })
        if(res[0]) {
          setProj(res[0])
        }
      })
  }, [id])

  return (
    <div className="page">
      {
        proj != "" ?
        <div>
          <h1>{proj.name}</h1>
          <p>{proj.description}</p>
          <ul className='images'>
            {
              proj.images ?
              proj.images.map((i: any) => {
                return <li><img src={i} alt={proj.name} /></li>
              }) : 
              null
            }
          </ul>
        </div> :
        <div>
          <h1>Projeto não localizado</h1>
          <Link to='/'>Voltar à pagina inicial</Link>
        </div>
        
      }
      
    </div>
  )
}