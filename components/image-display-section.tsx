"use client";

import Image from "next/image";
import ImageUploader from "./image-uploader";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const ImageDisplaySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ImageUploader />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Original Image</h2>
        <div className="aspect-video bg-gray-200 rounded-md overflow-hiddeen">
          <Image
            src="https://ik.imagekit.io/uqwclhhop/default-image.jpg?updatedAt=1734791600457"
            width={500}
            height={500}
            alt="Original uploaded image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      ImageDisplaySection
    </div>
  );
};

export default ImageDisplaySection;
