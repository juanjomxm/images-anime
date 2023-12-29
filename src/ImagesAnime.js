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
  
  function ImagesAnime(){
    const [inputCategory, setInputCategory] = React.useState('');
    const [images, setImages] = React.useState([]);
  
    const searchCategoryImages = async () => {
      if (inputCategory) {
        try {
          const { data, status } = await apiImagesAnime.get(`/search?many=1&included_tags=${inputCategory}`);
          if (status === 200) {
            setImages(data.images);
          } else {
            console.log(`Hubo un error: ${status}`);
          }
        } catch (error) {
          console.error('Error al realizar la búsqueda:', error);
        }
      } else {
        setImages([]);
      }
    };
  
    const editAnimeFav = (imageId) => {
      // Aquí puedes implementar la lógica para editar favoritos
      console.log(`Editando favorito para la imagen con ID: ${imageId}`);
    };
  
    return (
      <div>
        <label htmlFor="category-images">Categoría de imágenes:</label>
        <input
          type="text"
          id="category-images"
          value={inputCategory}
          onChange={(e) => setInputCategory(e.target.value)}
        />
        <button onClick={searchCategoryImages}>Buscar</button>
  
        <div id="section-home">
          {images.map((image, index) => (
            <div key={index}>
              <img 
              src={image.url} 
              alt={`${index + 1}`} 
              width={400} 
              height={400} />
              <button onClick={()=> 
                editAnimeFav(image.image_id)}>Agregar a favoritos
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export { ImagesAnime }