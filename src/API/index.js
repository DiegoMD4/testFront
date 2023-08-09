import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL


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
    const response = await axios({
      url: `${baseUrl}/Musica`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(values) // Utiliza 'data' en lugar de 'body'
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
