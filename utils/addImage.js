import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";

const addImages = (uri, collectin, setImage) => {
  const currentImage = new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      res(xhr.response);
    };
    xhr.open("GET", uri, true);
    xhr.send();
  }).then((res) => {
    const metadata = {
      contentType: "image/*",
    };
    const storageRef = ref(storage, collectin + res._data.name);
    const uploadTask = uploadBytesResumable(storageRef, res, metadata);
    uploadTask.on(
      "upload",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
        });
      }
    );
  });
};

export default addImages;
