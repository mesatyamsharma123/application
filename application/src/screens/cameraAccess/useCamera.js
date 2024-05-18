import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { cameraApi } from "./api";

function useCamera() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [textExtracted, setTextExtracted] = useState("");
  const takePicture = async () => {
    ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
      .then((result) => {
        if (!result.cancelled) {
          setImage(result.assets[0].uri);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getImageDataURL = async () => {
    if (!image) {
      alert("Please Click Image");
      return;
    }
    if (image) {
      const response = await fetch(image);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const imageDataURL = reader.result;
        setLoading(true);
        cameraApi(imageDataURL)
          .then((data) => {
            alert(data);
            setTextExtracted(data);
            setLoading(false);
          })
          .catch((err) => {
            alert("Something Went Wrong");
            setLoading(false);
          });
      };
    }
  };

  return {
    image,
    loading,
    setImage,
    setLoading,
    takePicture,
    getImageDataURL,
    textExtracted,
  };
}

export default useCamera;
