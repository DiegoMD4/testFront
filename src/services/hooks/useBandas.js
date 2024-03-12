import { getElements} from "../../API";
import { useState, useEffect } from "react";

export const useBandas = () =>{
  const [bandas, setBanda] = useState([]);

  const refreshGallery = () =>{
    getElements().then((newBanda) => setBanda(newBanda))
  }
  useEffect(refreshGallery, [bandas]);

  return {bandas, refreshGallery}
}

