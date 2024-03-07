import { getElements } from "../API";
import { useState, useEffect } from "react";

export const useBandas = async () =>{
    try {
        const response = await getElements();
  
        if (response.status === 200) {
          return response.data
        }
      } catch (error) {
        console.error("Error al cargar los elementos:", error);
      }
}