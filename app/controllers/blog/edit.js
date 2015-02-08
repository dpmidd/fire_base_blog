import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    updateBlog: function(blog) {
      var title = this.get('title');
      var body = this.get('body');
      this.set('title', title);
      this.set('body', body);
      blog.save();
      this.transitionToRoute('blogs');
    },
    deleteBlog: function(blog) {
      blog.destroyRecord();
      this.transitionToRoute('blogs');
    }
  }
});
