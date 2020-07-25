const Pose = require("../models/pose.model");

//Create and save new pose
exports.create = (req, res) =>{

  if(!req.body){
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

 const pose = new Pose({
   category: req.body.category,
   url: req.body.url,
   details: req.body.details,
   downloadable: req.body.downloadable
 });

 //Save pose into databse
   Pose.create(customer, (err, data) => {
     if (err)
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the pose."
       });
     else res.send(data);
   });
 };
