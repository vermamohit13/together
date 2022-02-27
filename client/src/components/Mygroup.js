import React ,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import {collection, doc,getDocs,setDoc,updateDoc,deleteDoc} from 'firebase/firestore';
import { useEffect } from 'react';
import {db,auth} from "../firebase";
import { useAuth } from '../context/authcontext';
import axios from 'axios';
export default function Group() {
 const location=useLocation();
 const doc_id=location.state.groupid;
 const author=location.groupAuthUid;
 const chatID=location.chatid;
 console.log(doc_id);
 const [participants,setParticipants]=useState([]);
 const {currentUser}=useAuth();
const [isMember,setIsMember]=useState();
const [user,setUser]=useState("");
const handleAccept = (puser,pname,pemail)=>async (e) => {
    e.preventDefault();
    const docRef = doc(db, "Community", doc_id);
    const postsCollectionRef = doc(docRef, "Participants",puser);
    const dataSnap=updateDoc(postsCollectionRef ,{
      status:"Accepted",
    });
    let newArr=[];
    let formdata = new FormData();
        formdata.append("email", pemail);
        formdata.append("username", pname);
        formdata.append("secret", puser);
          axios
            .post("https://api.chatengine.io/chats/"+chatID+"/people", formdata, {
                headers: {
                    "Project-ID": "dbd8427c-68dd-495e-938e-e5686df0fda7",
                    "User-Name": auth.currentUser.email,
                    "User-Secret": auth.currentUser.uid,
                  },
            })
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
    await deleteDoc(postsCollectionRef);
}

 useEffect(() => {
    if((!user&&currentUser)||user){
        setUser(currentUser.uid);
        const getData = async () => {
            const docRef = doc(db, "Community", doc_id);
            const participantsRef=collection(docRef,"Participants");
            const data = await getDocs(participantsRef);
            setParticipants(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
        }
        getData();
    }
  },[currentUser,handleReject]);
     
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
                 <button onClick={handleAccept(post.id,post.name,post.email)}>Accept</button>
                 <button onClick={handleReject(post.id)}>Reject</button>
                 </>}
                          </div>   
                          )
                      })}
         
          </div>
       
  </>
)
}
