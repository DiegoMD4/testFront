import React, { useEffect , useState} from 'react'
import axios from 'axios'


const baseUrl = `http://localhost:4000`

async function getElements() {
  try {
    const response = await axios({
      url: `${baseUrl}/Musica`,
      method: 'GET'
    })

    return response

  } catch (error) {
    console.log(error);
  }
}


export const Card = () => {

  let [Artista_Banda , setBanda] = useState([]);
 
  
useEffect(() =>{
async function loadElements(){
  const response = await getElements();

  if(response.status === 200){
    for (let index = 0; index < response.data.length; index++) {
      setBanda(response.data[index].Artista_Banda)
      console.log(response.data[index].Artista_Banda)
    }
  }
}
loadElements();
}, []) 

  return (
    <div className='card'>
        <div className='card-header'>
            <h5>{Artista_Banda}</h5>
        </div>
        <div className='card-body'> 
            <p></p>
        </div>
    </div>
  )
}
