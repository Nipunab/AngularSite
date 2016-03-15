var nbServer = require('nb-json-db');


nbServer.rootPath = __dirname;

nbServer.dBFolderName = "data";
nbServer.dBPort = 5654;

nbServer.ModelHash["projects"] = function (obj) {
    this.Id = obj["Id"] || nbServer.guid();
    this.Name = obj["Name"];
};

nbServer.ModelHash["employee"] = function (obj) {
    this.Id = obj["Id"] || nbServer.guid();
    this.FName = obj["FName"];
     this.LName = obj["LName"];
      this.EmpId = obj["EmpId"];
};

nbServer.ModelHash["practise"] = function (obj) {
    this.Id = obj["Id"] || nbServer.guid();
    this.PName = obj["PName"];

    this.Lead = obj["Lead"];
};
nbServer.ModelHash["trainings"] = function (obj) {
    this.Id = obj["Id"] || nbServer.guid();
    this.TName = obj["TName"];

    this.Lead = obj["Lead"];
};

nbServer.ModelHash["users"] = function (obj) {
    this.Id = obj["Id"] || nbServer.guid();
    this.Username = obj["Username"];

    this.Password = obj["Password"];
};


nbServer.init();



//file upload server code
var fileServer = require('./file-upload-server.js');
fileServer.init();
