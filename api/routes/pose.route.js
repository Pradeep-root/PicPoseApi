module.exports = app => {
  const pose = require("../controllers/pose.controller");

  // Create a new pose
  app.post("/create_pose", pose.create);

  // Get list of poses
  app.get("/all_pose", pose.findAll);

};
