import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://boiling-inferno-4578.firebaseio.com/')
});
