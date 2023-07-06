import React, {useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'

function Formulario() {
const [formularioEnviardo, setFormulario] = useState(false)

  return (
    <>
      <Formik
      initialValues={{
        Artista_Banda: ''
      }}
      validate={(info)=>{
        let err = {}
        if(!info.Artista_Banda){
          err.Artista_Banda = 'Agregue una banda'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(info.Artista_Banda)){
          err.Artista_Banda = "Solo puede contener letras y espacios"

        }
        return err
      }}
        onSubmit={(info, {resetForm})=>{
          resetForm();
          setFormulario(true);
          setTimeout(()=> setFormulario(false), 4000)
        }}
      > 
        {( {errors} ) =>(
            <Form>
                <div>
                  <label htmlFor="Artista_Banda">Artista o Banda</label>
                  <Field 
                    type="text" 
                    id='Artista_Banda' 
                    name='Artista_Banda' 
                    placeholder='Artista o Banda' 
                  />
                  <ErrorMessage name='Artista_Banda' component={()=> <div>{errors.Artista_Banda}</div>}/>
                </div>
              <button type="submit">Enviar</button>
              {formularioEnviardo && <p>Formulario enviado a la API</p>}
            </Form> 
      )}
      </Formik>
    </>
  )
}

export default Formulario