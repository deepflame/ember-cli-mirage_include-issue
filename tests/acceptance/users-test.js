import { test } from 'qunit';
import moduleForAcceptance from 'mirage-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | users');

test('visiting /users', function(assert) {
  assert.expect(1);

  // seed db
  let user = server.create('user');
  server.create('post', { user });

  visit('/users');

  andThen(function() {
    assert.equal(currentURL(), '/users');
  });
});
