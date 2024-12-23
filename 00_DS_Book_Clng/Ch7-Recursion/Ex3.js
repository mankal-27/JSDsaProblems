// Flatten An Object
/*

var  var dictionary = {
       'Key1': '1',
       'Key2': {
           'a' : '2',
           'b' : '3',
           'c' : {
               'd' : '3',
               'e' : '1'
           }
       }
  }
*/

//Base case: The base case for this problem is when input is not an object.


function flattenDictionary(dictionary){
    var flattenDictionary = {}

    function flattenDictionaryHelper(dictionary, propName){
        if(typeof dictionary != 'object'){
            flattenDictionary[propName] = dictionary;
            return;
        }
        for(var prop in dictionary){
            if(propName == ""){
                flattenDictionaryHelper(dictionary[prop], propName+prop);
            }else{
                flattenDictionaryHelper(dictionary[prop], propName+'.'+prop);
            }
        }
    }
    flattenDictionaryHelper(dictionary, '');
    return flattenDictionary;
}