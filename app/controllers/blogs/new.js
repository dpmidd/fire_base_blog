import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    saveBlog: function() {
      var title = this.get('title');
      var body = this.get('body');
      var blog = this.store.createRecord('blog', {title: title, body: body});
      this.set('title', '');
      this.set('body', '');
      blog.save();
    }
  }
});
