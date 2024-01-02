import React from "react";
import { TitleAnime } from "./TitleAnime";
import { CategoriesImages } from "./Categories";
import { ImagesAnime } from "./ImagesAnime";

function App() {
  return (
    <React.Fragment>
      <TitleAnime/>
      <CategoriesImages/>
      <ImagesAnime/>
    </React.Fragment>
  );
}

export {App};
