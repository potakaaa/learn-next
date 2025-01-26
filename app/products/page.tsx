import React from "react";
import PhotoCard from "../components/PhotoCard";

export interface Photo {
  id: number;
  title: string;
}

const ProductPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos: Photo[] = await res.json();

  return (
    <div className="p-5 flex flex-col space-y-3">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default ProductPage;
