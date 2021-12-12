import { Button } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import './navbar.css';

import {Link} from "react-router-dom"
export default function Mentors() {
 
  const[mentors,setMentors]=useState([])
   // function to get mentors suing get method
      function getMentors() {
  
            fetch("https://assignstudentandmentor.herokuapp.com/mentors",{
          method: "GET",
        })
          .then((res) => res.json())
          .then(res=>setMentors(res))
          .then((res) => console.log(res));
      }
      useEffect(()=>{
        getMentors();
      },[])
    
    return (
        <div>
          <ul className="studentsList">
        
         
              {mentors.map((e,idx)=>(
            <div  key={idx}>
               
                    <li type="1"><p>{e.name}</p></li>
                   
            </div>
          ))}
         
          <Link className="link" to="/add-mentor">
            <Button id="addMentor"variant="contained" color="primary">Add new Mentor</Button>
            </Link>
           </ul>
          
        </div>
    )
}
