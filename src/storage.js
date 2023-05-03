import {app} from "./firebase";
import { getStorage,ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
const storage = getStorage(app);


export const uploadImage = async (file) => {
    try{
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        const result = await uploadTask;
        const imageUrl = await getDownloadURL(uploadTask.snapshot.ref)
        return imageUrl;
    }catch(error){
        console.error(error);
        return null;
    }
}