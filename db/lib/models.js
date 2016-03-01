var $M = {};
var Utl = require('./util');
$M.Project = function (obj) {
    this.Id = obj["Id"] || Utl.guid();
    this.Name = obj["Name"];

    this.StartDate = obj["StartDate"] || (new Date).getTime();
    this.ExpectedEndDate = obj["ExpectedEndDate"];
    this.ActualEndDate = obj["ActualEndDate"];

    this.Manager = obj["Manager"];
};

$M.Practise = function (obj) {
    this.Id = obj["Id"] || Utl.guid();
     this.PName = obj["PName"];
};

$M.Employee = function (obj) {
    this.Id = obj["Id"] || Utl.guid();
     this.FName = obj["FName"];
     this.LName = obj["LName"];
     this.EmpId = obj["EmpId"];
      this.JoinedDate = obj["JoinedDate"];
      this.ExpWhenJoined = obj["ExpWhenJoined"];
};


module.exports = $M;