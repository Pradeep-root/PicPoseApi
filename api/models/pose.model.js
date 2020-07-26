const sql = require("./db");

//constructor
const Pose = function(pose){
  this.category = pose.category;
  this.url = pose.url;
  this.details = pose.details;
  this.downloadable = pose.downloadable;
};

// Insert opration
Pose.create = (newPose, result) => {
  sql.query("INSERT INTO pose SET ?", newPose, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created pose: ", { id: res.insertId, ...newPose });
    result(null, { id: res.insertId, ...newPose});
  });
};

// Get all opration
Pose.getAll = result=>{
  sql.query("SELECT * FROM Pose", (err, res) =>{
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("pose_list:", res);
    result(null, res);
  });
};

module.exports = Pose;
