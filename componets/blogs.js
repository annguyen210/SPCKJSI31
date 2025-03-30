import {   
  collection,   
  getDocs,   
  doc,   
  setDoc,   
  getDoc,   
  query,   
  serverTimestamp,   
  deleteDoc
} from "https://www.gstatic.com/firebasejs/9.6.1`/firebase-firestore-lite.js";   
import { firestore } from "../app.js";

function Blog(  
  created_by,   
  created_at,   
  description,   
  title,   
  poster = "",   
  comments = [],   
  likes = [],   
  views = 0   
){

// function  
function addComment(comment, created_at, created_by) {  
  this.comments.push({  
  comment: comment,  
  created_at: created_at,  
  created_by: created_by,  
  });  
updateBlog();
 }  
 
 function addLike(uid) {  
  this.likes.push(uid);  
  updateBlog();  
 }  
 
 function updateBlog() {  
  const blogRef = doc(firestore, "blogs", this.id);  
  setDoc(blogRef, {  
  description: this.description,  
  title: this.title,  
  poster: this.poster,  
  comments: this.comments,  
  likes: this.likes,  
  views: this.views + 1,  
 });  
 }  
}
 async function deleteBlog() {  
  await deleteDoc(firestore, "blogs", this.id);  
}  

async function getBlogList() {
  const q = await query(collection(firestore, "blogs"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // list.push(doc);
  });
}

return {  
  description: this.description,  
  title: this.title,  
  poster: this.poster,  
  comments: this.comments,  
  likes: this.likes,  
  views: this.views,  
};  
