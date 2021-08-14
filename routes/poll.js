'use strict';
const express=require("express");
const router=express.Router();
const db=require("../lib/db.js");
module.exports=router;

//takes a list of candidates as json 
router.post("/set_candidates",express.json(),(req,res)=>{
	console.log(`-------------set_candidates from '${req.ip}'----------------------`);
	console.log(req.body);
	db.setCandidates(req.body.candidates);
	db.clearVoters();
	let ans={result:"ok"};
	res.json(ans);
});

//get candidate list
router.get("/get_candidates",(req,res)=>{
	console.log(`-------------get_candidates from '${req.ip}'----------------------`);
	res.json({"candidates":db.getCandidates()});
});

//get vote count
router.get("/get_vote_count",(req,res)=>{
	console.log(`-------------get_vote_count from '${req.ip}'----------------------`);
	let ans={};
	ans.votes=new Object();
	for(let c of db.getCandidates()){
		console.log(c,db.getVotes(c));
		ans.votes[c]=db.getVotes(c);
	}
	console.log(ans);
	res.json(ans);
});
//cast a vote
router.post("/cast_vote",express.json(),(req,res)=>{
	console.log(`-------------cast_vote from '${req.ip}'----------------------`);
	console.log(req.body);
	let ans={};
	if(!db.markVoter(req.body.voter)){
		ans.error="already voted";
	}else{
		let choice=req.body.choice;
		let votes=db.getVotes(choice);
		if(votes==-1){
			ans.error="invalid candidate";
		}else{
			ans.result="ok";
			db.setVotes(choice,votes+1);
		}
	}
	res.json(ans);
});
