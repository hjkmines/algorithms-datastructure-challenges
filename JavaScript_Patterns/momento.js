
// Contractor object
var Contractor = function(){
	this.id = "" ;
	this.name = "" ;
	this.email = "" ;
 
	this.saveState = function(){
		return new ContractorState(this)
	}
 
	this.restoreState = function(_obj){
		this.id = _obj.id ;
		this.name = _obj.name ;
		this.email = _obj.email ;
	}
}
 
// Memento Object
var ContractorState = function(_obj){
	this.id = _obj.id ;
	this.name = _obj.name ;
	this.email = _obj.email ;
}
 
// CareTaker Object
var CareTaker = function(){
	var conState = null;
	this.SetContractorState = function(_conState){
		conState =  _conState;
	}
	this.GetContractorState = function(){
		return conState;
	}
}
 
var objContractor = new Contractor();
objContractor.id="101";
objContractor.name="name101";
objContractor.email="email101";
 
var objCareTaker = new CareTaker();
objCareTaker.SetContractorState(objContractor.saveState());
 
objContractor.id="202";
objContractor.name="name202";
objContractor.email="email202";
 
objContractor.restoreState(objCareTaker.GetContractorState());
console.log(objContractor);