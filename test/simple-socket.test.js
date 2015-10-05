var SSocket = require('../');
var request = require('request');

describe('SSocket', function() {

  describe('#constructor()', function(){
    it('should return an object', function(){
      var sSocket = SSocket();

      expect(typeof sSocket).to.be.equal('object');
    });
  });

  describe('#listen()', function () {
    var sSocket;

    beforeEach(function(){
      sSocket = SSocket();
    });

    it('should listen a port', function (done) {
      var app = sSocket.listen(8987);

      request('http://127.0.0.1:8987',handle);
      function handle(error, response){
        if(error) return;

        expect(app).is.not.be.undefined;
        expect(response.statusCode).to.be.equal(404);
        done();
      }

    });
  });
});
