"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonfile_1 = require("jsonfile");
var database_1 = require("../database");
var getAllCharacters = function () { return jsonfile_1.default.readFileSync(database_1.pathFile); };
var clima = getAllCharacters();
console.log(clima);
