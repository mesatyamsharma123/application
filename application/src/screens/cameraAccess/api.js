import axios from "axios";
//import { globalApi } from "../../globalApi";


export function cameraApi(imageDataURL) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${"https://1430-2409-4081-8495-9890-b089-f5fa-6e-475b.ngrok-free.app/"}/capture`, { image_data: imageDataURL })
      .then((data) => {
        resolve(data.data.sentence);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
