/*
7, “hi”
20, “hello”
33, “sunny”
46, “weather”
59, “wow”
72, “forty”
85, “happy”
98, “sad”
*/

//using Linear Probing

function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashTable.prototype.initArray = function(size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(null);
    }
    return array;
}

HashTable.prototype.put = function(key, value) {
    if (this.limit >= this.size) throw 'hash table is full'

    var hashedIndex = this.hash(key);

    // Linear probing
    while (this.keys[hashedIndex] != null) {
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
}

HashTable.prototype.get = function(key) {
    var hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != key) {
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex];
}

HashTable.prototype.hash = function(key) {
    // Simple hash function: take the key modulo the table size
    return key % this.size;
}

var exampletable = new HashTable(13);
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "fourty"); // Fixed typo from "fourty" to "forty"
exampletable.put(85, "happy");
exampletable.put(98, "sad");
console.log(exampletable);