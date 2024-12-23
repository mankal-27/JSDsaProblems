/**
 * Returns an object where the keys are the unique elements in the input array and the values are their respective frequencies.
 *
 * @param {Array} arr - The input array
 * @return {Object} An object with unique elements as keys and their frequencies as values
 */
function frequencyOfEachElement(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    return obj;
}

module.exports = frequencyOfEachElement