import {CLAIMS} from "./in-memory-db";

export function saveClaim(req, res) {
  const claim = req.body;

  console.log('Received Claim: ');
  console.log(claim);
  CLAIMS.push(claim);

  res.status(200).json({message: "Claim added successfully."});
}

export function getAllClaims(req, res) {
  res.status(200).json(CLAIMS);
}
