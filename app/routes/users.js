import Ember from 'ember';

const {
  $
} = Ember

export default Ember.Route.extend({
  model() {
    return $.ajax('/users');
  }
});
