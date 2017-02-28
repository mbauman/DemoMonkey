import Repository from '../../src/models/Repository';
import Configuration from '../../src/models/Configuration';

var assert = require('assert');

describe('Repository', function() {
    describe('#findByName', function() {
        it('should return a configuration identified by a given name', function() {
          var repo = new Repository({
            'c0': new Configuration("a = b"),
            'c1': new Configuration("x = y")
          });
          var cfg = repo.findByName('c0');
          var node = {'value': 'a'};
          cfg.apply(node);
          assert.deepEqual({'value': 'b'}, node);
        });
    });
});
