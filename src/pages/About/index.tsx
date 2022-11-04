import { useEffect, useState } from 'react';
import { Read } from '../../data/environment';
import './about.scss';

export function About() {
  let [about, setAbout] = useState<any>([])

  useEffect(() => {
    Read('About')
      .then((res: any) => {
        if(res[0]) {
          setAbout(res[0])
        }
      })
  }, [])
  
  return (
    <div className='page'>
      <h1>Sobre mim</h1>
      {
        about.description && about.image.length > 0 ? 
        <div className='content'>
          <div className="img">
            <img src={about.image[0]} alt="image" />
          </div>

          {
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: about.description }}>
            </div>
          }
        </div> :
        null
      }
    </div>
  )
}