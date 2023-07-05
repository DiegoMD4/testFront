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
export async function postElements() {
  try {
    const response = await axios({
      url: `${baseUrl}/Musica`,
      method: 'POST'
    })

    return response

  } catch (error) {
    console.log(error);
  }
}
