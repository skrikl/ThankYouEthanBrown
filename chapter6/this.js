let doggy = {
    name: "Jacky",
    goodBoy: function() {return this.name;},
    whatIsThis: function() {return this;},
    mopeProps: "Some more props :)",
};
console.log("This is to play with 'this' values a bit \n \t\t\t****Have fun!**** \n");
console.log("First of all let's check the 'good way' of how 'this' works. We have an object called dog with a Jacky in it. \n" +
    "Jacky is a good boy, to check this we have a method called goodBoy(). This method calls 'this' and uses a comma notation " +
    "to refer to the 'name' property of the 'doggy' object:");
console.log(`**Who is a good boy? ${doggy.goodBoy()} is a good boy!**`);
console.log("This is the most common way to use 'this'. If you check what is 'this' you can return it using 'whatIsThis'" +
    " method:\n **************");
console.log(doggy.whatIsThis());
console.log("**************\nNow let's log the contents of the object:\n##############");
console.log(doggy);
console.log("##############\nThere is no difference between these two logs. So 'this' is just a variable, that holds " +
    "the reference to its parent object");
let kitty = {
    name: "",
    nestedThis: function () {
        function whatIsNestedThis() {
            console.log("\n*********************\nNow we call 'this' from a nested function\n*********************");
            console.log(this);
            console.log("*********************\nThere is a big log stating that 'this' now refer to the object called" +
            "global'\n*********************\n");
        };
        whatIsNestedThis();
        return this.name;
    },
};
console.log("\nThe game changes when a cat is around. Smokey the cat is crazy about the nests and her 'whatIsThis' method is " +
    "nested in one of her methods. Let's check how 'this' works now:");
kitty.nestedThis();
console.log("So nested 'this' is a reference to a global object. Or 'undefined' in strict mode. To fix this problem just convert 'whatIsNestedThis' to an arrow function.");