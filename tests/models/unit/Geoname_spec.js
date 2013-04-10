var 
    Geoname = require('../../../models/Geoname'),
    should = require('should');

var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost/socialbro_development");

describe("------ Geoname: ", function(){

  describe("findByName", function(){   
    it("España is ES", function(done){
      Geoname.findByName('España', 10, function(err, results) {        

        should.not.exist(err);
        should.exist(results);
        results.length.should.not.be.eql(0);
        results[0].country_code.should.be.eql('ES');
        done();
      });
    });

    it("Córdoba is AR", function(done){
      Geoname.findByName('Córdoba', 10, function(err, results) {        

        should.not.exist(err);
        should.exist(results);
        results.length.should.not.be.eql(0);
        results[0].country_code.should.be.eql('AR');
        done();
      });
    });
 });

 describe("findByNameAndCoords", function(){   
    it("Córdoba GMT +1 is ES", function(done){
      Geoname.findByNameAndUTCOffset('Córdoba', 1, 10, function(err, results) {        

        should.not.exist(err);
        should.exist(results);
        results.length.should.not.be.eql(0);
        results[0].country_code.should.be.eql('ES');
        done();
      });
    });
 });


});