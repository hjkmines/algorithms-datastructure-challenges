//What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?
var bar = null;
console.log(typeof bar === "object");  // logs true!
console.log((bar !== null) && (typeof bar === "object"));  // logs false

//What will the code below output to the console and why?
(function(){
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

//solution: 
a defined? false
b defined? true

//What will the code below output to the console and why?
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

//solution: 
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
