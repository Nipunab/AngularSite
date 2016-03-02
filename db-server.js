var nbServer = require('nb-json-db');

/*
    E.g:-
    nbServer["tablename"] = function(obj){
        this.PropertyName = obj["PropertyName"];
    }

    for "Id" property we must use below way
        this.Id = obj["Id"] || nbServer.guid();
    As we use 'Id' property for unique/identification purpose
*/


nbServer.rootPath = __dirname;

nbServer.dBFolderName = "data";
nbServer.dBPort = 5654;

nbServer.ModelHash["projects"] = function (obj) {
    this.Id = obj["Id"] || nbServer.guid();
    this.Name = obj["Name"];
};

nbServer.ModelHash["employee"] = function (obj) {
    this.Id = obj["Id"] || nbServer.guid();
    this.Name = obj["Name"];
};

nbServer.ModelHash["practise"] = function (obj) {
    this.Id = obj["Id"] || nbServer.guid();
    this.Name = obj["Name"];

    this.Lead = obj["Lead"];
};

nbServer.init();