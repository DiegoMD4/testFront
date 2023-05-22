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
