import { IKUpload, ImageKitProvider } from "imagekitio-next";
import React from "react";

const ImageUploader = () => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const autheticator = async () => {
    try {
      const response = await fetch("/api/auth");
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error}`);
    }
  };

  const onError = (err: any) => {
    console.log("Error:", err);
  };

  const onSuccess = (res: any) => {
    console.log("Success", res);
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={autheticator}
    >
      <div>
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
        />
      </div>
    </ImageKitProvider>
  );
};

export default ImageUploader;
