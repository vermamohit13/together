import React ,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import {collection, doc,getDocs,setDoc} from 'firebase/firestore';
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
const [isMember,setIsMember]=useState("");
const [user,setUser]=useState(null);
 useEffect(() => {
    if(!user&&currentUser){
        setUser(currentUser.uid);
        const getData = async () => {
            const docRef = doc(db, "Community", doc_id);
            const participantsRef=collection(docRef,"Participants");
            const data = await getDocs(participantsRef);
            setParticipants(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
            data.forEach((doc) => {
               if(doc.data().aid===currentUser.uid){
                   if(doc.data().status==="Accepted"){
                       setIsMember("true");
                   }
                   if(doc.data().status==="pending"){
                    setIsMember("pending");
                }
               }
             });
          };
           
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
    <div>Group</div>
    {isMember==="true"&&<div>u are the Member</div>}
    {isMember==="pending"&&<div>pending</div>}
    {(isMember==="")&&
    <>
    <div>u need to join the group </div>
    <button onClick={Join}>Join</button>
    </>
    }
    </>
  )
}
