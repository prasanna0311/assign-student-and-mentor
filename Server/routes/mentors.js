import express from "express";
import { Mentors } from "../models/mentor.js";
const router = express.Router();
router
.route('/mentors')
// to get all mentors
  .get( async (request, response) => {
    try {
      const mentorsList = await Mentors.find();
      response.send(mentorsList);
      console.log(mentorsList);
    } catch (err) {
      response.send(err);
      console.log(err);
    }
  })
  // to add create mentors
  .post( async (request, respone) => {
    const addMentor = request.body;
    console.log(addMentor);
  
    const mentor = new Mentors(addMentor);
  
    try {
      const newMentor = await mentor.save();
      respone.send({newMentor, message:" Created and Added successfully"});
    } catch (err) {
      respone.status(500);
      respone.send(err);
      console.log(err);
    }
  });
 

  
export const mentorRouter = router;