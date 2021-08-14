'use strict';

/* db provides the facility to store the polling data 
 * currently implemented as an in-memory db
 */

var votes={};
var voters=new Set();

//takes a list of candidate names
function setCandidates(caldidateList){
	votes={};
	for(let c of caldidateList){
		votes[c]=0;
	}
}

//returns a list of candidates
function getCandidates(){
	let candidates=[];
	for(let c in votes){
		candidates.push(c);
	}
	return candidates;
}

//returns false if candidate invalid else true
function setVotes(candidate,count){
	if(candidate in votes){
		votes[candidate]=count;
		return true;
	}else{
		return false;
	}
}

//return -1 if candidate invalid else his votes
function getVotes(candidate){
	if(candidate in votes){
		return votes[candidate];
	}else{
		return -1;
	}
}

//mark that voter has voted
//return false if already voted else true
function markVoter(voter){
	if(voters.has(voter)){
		return false;
	}
	voters.add(voter);
	return true;
}

//clear all voters
function clearVoters(){
	voters.clear();
}
exports.setCandidates=setCandidates;
exports.getCandidates=getCandidates;
exports.setVotes=setVotes;
exports.getVotes=getVotes;
exports.markVoter=markVoter;
exports.clearVoters=clearVoters;

