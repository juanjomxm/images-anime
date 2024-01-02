import React from "react";
import axios from "axios";

const apiImagesAnime = axios.create({
    baseURL: 'https://api.waifu.im/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept-Version': 'v5',
      'Authorization': 'Bearer qfFOspVSC27qyYMEaNMEmTdykJVCXh2Ie2Whb7zPhlLK18CEgBq6htApKD36OhSIpbqO98limoxFcjJsekEw3wBzsgw2zP0uGbNTohhJE2MjfSUJrVq6td8ZR4ujmitnv1ybrU56bdAA5gedpADQcdMCFN_xAuM2VXlBgIP-3JU'
    }
  });
  
  // Componente para renderizar imagenes
  function ImagesAnime(){
    const [inputCategory, setInputCategory] = React.useState('') // Estado para el buscador de las categorias
    const [images, setImages] = React.useState([]) // Estado que actualiza la peticion de las imagenes y tambien se encarga de renderizar
  
    const searchCategoryImages = async () => { // Funcion asincrona con la peticion a la api de waifu, para mostrar las imagenes

      const { data, status } = await apiImagesAnime.get(`/search?many=1&included_tags=${inputCategory}`)
      if (status === 200) {
        setImages(data.images) // Este actualizador del estado es el encargado de renderizar las imagenes mas adelante
      } else {
        console.log(`Hubo un error: ${status}`)
      }
    }
  
    const editAnimeFav = (imageId) => {
      // Aquí puedes implementar la lógica para editar favoritos
      console.log(`Editando favorito para la imagen con ID: ${imageId}`)
    }
  
    return (
      <div>
        <div className="container-search">
          <input
            type="text"
            value={inputCategory}
            onChange={(e) =>{
              setInputCategory(e.target.value)
            } 
            }
          />
          <button 
          onClick={searchCategoryImages}
          >Buscar
          </button>
        </div>

        <div className="container-images">
          {images.map((image, index) => (
            <div key={index}>
              <img 
              src={image.url}
              width={300} 
              height={300} />
              {/* <button onClick={()=> 
                editAnimeFav(image.image_id)}>Agregar a favoritos
              </button> */}
             </div>
          ))}
        </div>
      </div>
    );
  };
  
  export { ImagesAnime }