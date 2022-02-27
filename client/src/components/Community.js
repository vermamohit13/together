import React, { useState,useEffect } from 'react'
import { collection,addDoc,getDocs,doc, setDoc} from 'firebase/firestore';
import  {db, auth} from '../firebase';
import { useAuth } from '../context/authcontext';
import { Link } from 'react-router-dom';
export default function Community({isAuth}) {
     const [gname,setGname]=useState();
     const {currentUser}=useAuth();
     const [postLists,setPostList]=useState([]);
     const [user,setUser]=useState(null);
     async function CreateGroup(e){
        e.preventDefault();
        const postsCollectionRef = collection(db, "Community");
        const added= await addDoc(postsCollectionRef, {
            gname,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
          });
          if(added){
              alert("ho gya");
          }
    }
   
    useEffect(() => {
        const getPosts = async () => {
          const postsCollectionRef = collection(db, "Community");
          const data = await getDocs(postsCollectionRef);
          setPostList(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
          console.log(data);
        };
        getPosts();

      },[]);
      useEffect(() => {
        if(!user&&currentUser){
            setUser(currentUser.uid);
        }
      },[currentUser]);
  return (
      <>

    <div>Community</div>
    <input type="text" 	onChange={(e) => setGname(e.target.value)}/> 
    <button onClick={ CreateGroup}>Create button</button>
    
         <div>
             
          {postLists.map((post)=>{
            return (
               <div  key={post.id}>
                   {post.gname}
                   {post.author.name}
                   { (post.author.id===user)&&
                   <Link to="/group" state={{groupid: post.id, groupname:post.gname,groupAuthUid:post.author.id,groupAuthName:post.author.name}} >Enter</Link>
                        }
                        {(post.author.id!==user)&&
                                <Link to="/mygroup" state={{groupid: post.id, groupname:post.gname,groupAuthUid:post.author.id,groupAuthName:post.author.name}} >Enter</Link>
                            }
                            </div>   
                            )
                        })}
           
            </div>
         
    </>
  )
}
