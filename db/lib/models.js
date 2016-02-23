var $M = {};
var Utl = require('./util');
$M.Project = function (obj) {
    this.Id = obj["Id"] || Utl.guid();
    this.Name = obj["Name"];
};

module.exports = $M;