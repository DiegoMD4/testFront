import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL
const FormData = require('form-data');


export async function getElements() {
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

export async function postElements(values) {
  try {
    const formData = new FormData();
    formData.append('file', values.file); // Agrega el archivo al FormData

    const response = await axios.post(`${baseUrl}/Musica`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}


export async function deleteElement(id) {
  try {
    const response = await axios({
      url: `${baseUrl}/Musica/${id}`, // Agrega el ID del elemento al final de la URL
      method: 'DELETE'
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
