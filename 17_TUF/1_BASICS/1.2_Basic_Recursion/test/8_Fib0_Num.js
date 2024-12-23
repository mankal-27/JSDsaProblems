const assert = require('assert');
const expect = require('chai').expect;
const fibonacciNum = require('../8_Fib0_Num'); // Adjust the path as per your project structure

describe('fibonacciNum', function() {

    it('should return 0 for index 0', function() {
        expect(fibonacciNum(0)).to.equal(0);
    });

    it('should return 1 for index 1', function() {
        expect(fibonacciNum(1)).to.equal(1);
    });

    it('should return 1 for index 2', function() {
        expect(fibonacciNum(2)).to.equal(1);
    });

    it('should return 2 for index 3', function() {
        expect(fibonacciNum(3)).to.equal(2);
    });

    it('should return 3 for index 4', function() {
        expect(fibonacciNum(4)).to.equal(3);
    });

    it('should return 5 for index 5', function() {
        expect(fibonacciNum(5)).to.equal(5);
    });

    it('should return 8 for index 6', function() {
        expect(fibonacciNum(6)).to.equal(8);
    });

    it('should return 21 for index 8', function() {
        expect(fibonacciNum(8)).to.equal(21);
    });

});
