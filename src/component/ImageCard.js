import React, { useState } from "react";
import { Image, Modal } from "@mantine/core";

const ImageCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <Image
        src={data.src.medium}
        alt={data.photographerName}
        className="object-cover rounded-t-lg cursor-pointer"
        radius="md"
        onClick={openModal} // Open the modal when clicked
      />

<Modal opened={isModalOpen} onClose={closeModal} padding="2rem">

    <h2 className="text-3xl font-bold mb-4">{data.alt}</h2>
    <p className="mb-2 text-blue-500 hover:underline">
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Photographer URL
      </a>
    </p>
    <div className="border-t border-gray-300 my-4"></div>
    <div className="flex justify-between">
      <div className="text-gray-600">
        <p>Photographer: {data.photographer}</p>
        <p>Photographer ID: {data.photographer_id}</p>
        <p>Picture ID: {data.id}</p>
        <p>AVG Color: {data.avg_color}</p>
        <p>Original Height: {data.height}</p>
        <p>Original Width: {data.width}</p>
      </div>
    </div>
    <div className="border-t border-gray-300 my-4"></div>
    <div className="flex justify-end">
      <button
        onClick={closeModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Close
      </button>
    </div>
</Modal>


    </div>
  );
};

export default ImageCard;


