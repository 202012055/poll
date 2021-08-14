# Design of Polling system

### divided in the follwing three layer

1. data access layer(currently implemented as a in-memory db)  

	it provides the following interface as a nodejs module:  
	* **setCandidates** - takes a list of candidate names
	* **getCandidates** - returns a list of candidates
	* **setVotes** - returns false if candidate invalid else true
	* **getVotes** - returns -1 if invalid candidate
	* **markVoter** - mark the voter as done returns false if already voted 
	* **clearVoters** - clear all voters 

2. application logic layer
	
	it provide the following **REST** api:
	* **set\_candidate**(POST) - takes a list of candidates
	* **get\_candidate**(GET) - returns a list of candidates
	* **get\_vote\_count**(GET) - returns vote count of all the candidates
	* **cast\_vote**(POST) - takes choice and voter\_id 

3. presentation layer
	
	just a simple website to show all this stuff

### How to launch
* npm install
* nodejs app.js
