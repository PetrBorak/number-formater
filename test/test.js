/**
 * Created by Petr on 4/7/2016.
 */

var expect = require('chai').expect;
var numFormatter = require('../index')

describe("#numFormatter",function(){
    it('should convert single digits',function(){
        var result = numFormatter(1);
        expect(result).to.equal('1');
    });
    it('should convert double to digits',function(){
        var result = numFormatter(12);
        expect(result).to.equal('12')
    });
    it('should convert tripple digits',function(){
        var result = numFormatter(123);
        expect(result).to.equal('123')
    });
    it('should convert 4 digits',function(){
        expect(numFormatter(1234)).to.equal('1,234')
    });
    it('should convert 5 digits',function(){
        expect(numFormatter(12345)).to.equal('12,345')
    });
    it('should convert 6 digits',function(){
        expect(numFormatter(123456)).to.equal('123,456')
    });
    it('should convert 7 digits',function(){
        expect(numFormatter(1234567)).to.equal('1,234,567')
    });
    it('should convert 8 digits',function(){
        expect(numFormatter(12345678)).to.equal('12,345,678')
    });
})