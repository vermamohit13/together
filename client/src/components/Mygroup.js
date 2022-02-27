import React ,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import {collection, doc,getDocs,setDoc,updateDoc,deleteDoc} from 'firebase/firestore';
import { useEffect } from 'react';
import {db,auth} from "../firebase";
import { useAuth } from '../context/authcontext';

export default function Group() {
 const location=useLocation();
 const doc_id=location.state.groupid;
 const author=location.groupAuthUid;
 console.log(doc_id);
 const [participants,setParticipants]=useState([]);
 const {currentUser}=useAuth();
const [isMember,setIsMember]=useState();
const [user,setUser]=useState("");
const handleAccept = puser=>async (e) => {
    e.preventDefault();
    const docRef = doc(db, "Community", doc_id);
    const postsCollectionRef = doc(docRef, "Participants",puser);
    await updateDoc(postsCollectionRef ,{
      status:"Accepted",
    });
    let newArr=[];
    newArr.forEach((post)=>{
      if(post.aid===puser){
        post.status="Accepted";
        console.log(post.status,"okay");
      }
    })
    setParticipants(newArr);

}
const handleReject = puser=>async (e) => {
    e.preventDefault();
    const docRef = doc(db, "Community", doc_id);
    const postsCollectionRef = doc(docRef, "Participants",puser);
    await deleteDoc(postsCollectionRef ,{
    });
    let newArr=[...participants];
    participants.forEach((post)=>{
        if(!post.aid){
         newArr.push(post);
        }
      })
      setParticipants(newArr);
}

 useEffect(() => {
    if(!user&&currentUser){
        setUser(currentUser.uid);
        const getData = async () => {
            const docRef = doc(db, "Community", doc_id);
            const participantsRef=collection(docRef,"Participants");
            const data = await getDocs(participantsRef);
            setParticipants(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
        }
        getData();
    }
  },[currentUser]);
     
  async function Join(e){
    e.preventDefault();
    const docRef = doc(db, "Community",doc_id);
        console.log("h",user);
    const postsCollectionRef = doc(docRef, "Participants",user);  
    const add= await setDoc(postsCollectionRef, {
        name: auth.currentUser.displayName, 
        aid: auth.currentUser.uid ,
        status: "pending",
      });
      setIsMember("pending");
      alert("added");
      
}
return (
    <>

  <div>Community</div>
       <div>
        {participants.map((post)=>{
          return (
             <div  key={post.id}>
                 {post.status==="pending"&&<>
                 <button onClick={handleAccept(post.id)}>Accept</button>
                 <button onClick={handleReject(post.id)}>Reject</button>
                 </>}
                          </div>   
                          )
                      })}
         
          </div>
       
  </>
)
}
