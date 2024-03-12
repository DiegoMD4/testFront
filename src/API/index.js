import { FormData } from "formdata-node";
import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

export async function getElements() {
  try {
    const response = await axios({
      url: `${baseUrl}/photos`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postElements(values) {
  try {
    const formData = new FormData();

    formData.append("artistaBanda", values.artistaBanda);
    formData.append("cancion", values.cancion);
    formData.append("enlace", values.enlace);
    formData.append("image", values.pic);
    const response = await axios.post(`${baseUrl}/Musica`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteElement(id) {
  try {
    const response = await axios({
      url: `${baseUrl}/Musica/Delete/${id}`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getById(id) {
  try {
    const response = await axios({
      url: `${baseUrl}/Musica/${id}`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
