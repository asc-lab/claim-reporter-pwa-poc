"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var in_memory_db_1 = require("./in-memory-db");
function saveClaim(req, res) {
    var claim = req.body;
    console.log('Received Claim: ');
    console.log(claim);
    in_memory_db_1.CLAIMS.push(claim);
    res.status(200).json({ message: "Claim added successfully." });
}
exports.saveClaim = saveClaim;
function getAllClaims(req, res) {
    res.status(200).json(in_memory_db_1.CLAIMS);
}
exports.getAllClaims = getAllClaims;
