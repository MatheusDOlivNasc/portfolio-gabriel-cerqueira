import './home.scss';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Read } from '../../data/environment'

export function Home() {
  
  let [list, setList] = useState<any>([])
  
  useEffect(()=> {
    Read('Projects', {order: 'order'})
      .then((i: any) => {
        setList(i)
      })
  }, [])

  return (
    <ul className="preview-list">
      {
        list.map((i: any) => {
          return (
            <li key={i.id}>
              {
                i.thumbnail ?
                i.thumbnail.map((images: any) => {
                  return (
                    <Link key={i.url} to={"i/" + i.url}>
                      <img src={images} alt="image" />
                    </Link>
                  );
                }) : 
                null
              }
            </li>
          )
        })
      }
    </ul>
  )
}