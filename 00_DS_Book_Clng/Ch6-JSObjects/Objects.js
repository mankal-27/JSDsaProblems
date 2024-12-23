function ExampleClass(name,size){
    var privateName = name;
    var privateSize = size;

    this.getName = function(){ return privateName}
    this.setName = function(name) { privateName = name }

    this.getSize = function() { return privateSize }
    this.setSize = function(size) { privateSize = size }
}

var example = new ExampleClass("Manjunath", 3);
example.setSize(33);
console.log(example.privateName);
console.log(example.getName());
example.setName("Kirn")
console.log(example.getName());
console.log(example.size);
console.log(example.getSize());


var exmptyObj = {}
exmptyObj['exampleKey'] = 'exampleValue';
exmptyObj.exampleKey2 = 'exampleValue';

console.log(exmptyObj)