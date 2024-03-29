import React, {useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import { postElements } from '../API'

function Formulario() {

const [formularioEnviado, setFormulario] = useState(false)
const [fileData, setFileData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setFileData(file);
  };

  return (
    <>
      <Formik
      initialValues={{
        artistaBanda: '',
        cancion: '',
        enlace: '',
        pic: '',
      }}
      validate={(info)=>{
        let err = {}
        if(!info.artistaBanda){
          err.artistaBanda = 'Agregue una banda'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,300}$/.test(info.artistaBanda)){
          err.artistaBanda = "Solo puede contener letras y espacios"

        }
        if(!info.cancion){
          err.cancion = 'Agregue una cancion'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,300}$/.test(info.cancion)){
          err.cancion = "Solo puede contener letras y espacios"

        }
        if(!info.enlace){
          err.enlace = 'Agregue un enlace'
        }else if(/^(https?:\/\/)?(www\.)?youtube\.com\/(watch\?v=|embed\/|v\/|.+\?v=)?([a-zA-Z0-9_-]{11})$/
        .test(info.enlace)){
          err.enlace = "No es una url válida"

        }
        /* if(!info.pic){
          err.pic = 'Agregue una pic'
        }else if(info.pic.name && /\.(jpg|jpeg|png|gif)$/.test(info.pic.name)){
          err.pic = "No es un formato válido"

        } */
        return err 
      }}
        onSubmit={(info, {resetForm}, )=>{
           resetForm();
          setFormulario(true);
          setTimeout(()=> setFormulario(false), 4000)
          
          postElements({
            ...info,
            pic: fileData,
          });

          console.log('este es el: ',fileData.name)
        }}
      > 
        {({errors}) =>(
            <Form className='formulario' encType="multipart/form-data">
                <div>
                  <label htmlFor="artistaBanda">Artista o Banda</label>
                  <Field 
                    type="text" 
                    id='artistaBanda' 
                    name='artistaBanda' 
                    placeholder='Artista o Banda' 
                  />
                  <ErrorMessage name='artistaBanda' component={()=> <div>{errors.artistaBanda}</div>}/>
                </div>
                <div>
                  <label htmlFor="cancion">Canción</label>
                  <Field 
                    type="text" 
                    id='cancion' 
                    name='cancion' 
                    placeholder='cancion' 
                  />
                  <ErrorMessage name='cancion' component={()=> <div>{errors.cancion}</div>}/>
                </div>
                  <label htmlFor="enlace">Enlace</label>
                <div>
                  <Field 
                    type="text" 
                    id='enlace' 
                    name='enlace' 
                    placeholder='enlace' 
                  />
                  <ErrorMessage name='enlace' component={()=> <div>{errors.enlace}</div>}/>
                </div>
                 <div>
                  <Field
                    type="file" 
                    id='pic' 
                    name='pic' 
                    placeholder='imagen' 
                    onChange={handleFileChange}
                  />
                  <ErrorMessage name='pic' component={()=> <div>{errors.pic}</div>}/>
                </div>
              <button type="submit">Enviar</button>
              {formularioEnviado && <p>Formulario enviado a la API</p>}
            </Form> 
      )}
      </Formik>
    </>
  )
}

export default Formulario