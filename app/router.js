import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("blogs",{path: "/"}, function(){
    this.route("blog",{path: "/:blog_id"});
  });
});

export default Router;
