import React, { FC } from "react";
import { Photo } from "../products/page";

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div className="border border-zinc-600 border-opacity-80 p-3 rounded-xl w-full flex space-x-3 items-center">
      <img
        src="https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699"
        className="aspect-square size-32 rounded-xl shadow-md"
      ></img>
      <div className="flex flex-col">
        <p className="text-xs text-opacity-20">{photo.id}</p>
        <p className="font-semibold tracking-tight text-sm text-left">
          {photo.title}
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;
