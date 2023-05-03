import {app} from "./firebase";
import { getFirestore } from "firebase/firestore";
import { collection, setDoc ,getDocs,doc ,updateDoc } from "firebase/firestore"; 
const db = getFirestore(app);

export const addPostToDb = async (post) =>  {
    try {
        const docRef = await setDoc(doc(db, "posts", post.postId), post);
        return true;
    }catch(error) {
        console.error("Error adding document: ", error);
        return false;
    }
}
export const getPostsFromDb = async () => {
    try{
        const querySnapshot = await getDocs(collection(db, "posts"));
        const posts = []
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            console.log(`${doc.id} => ${doc.data()}`);
            posts.push(data);
        });
        return new Promise((resolve,reject) => resolve(sortPosts(posts))) 
    }catch(error) {
        console.log(error)
        return new Promise((resolve,reject) => reject("error while retriving")) 
    }
}

export const upvotePost = async (postId,currUpvoteCount) => {
    try {
        const postRef = doc(db, "posts", postId);
        await updateDoc(postRef, {
            upvote: currUpvoteCount + 1
        });
        return getPostsFromDb();
    }catch(error) {
        console.error("Error adding document: ", error);
        return false;
    }
}

export const downvotePost = async (postId,currDownvoteCount) => {
    try {
        const postRef = doc(db, "posts", postId);
        await updateDoc(postRef, {
            downvote: currDownvoteCount + 1
        });
        return getPostsFromDb();
    }catch(error) {
        console.error("Error adding document: ", error);
        return false;
    }
}

function sortPosts(posts){
    return posts.sort((a,b) => new Date(a.timeStamp) - new Date(b.timeStamp))
}