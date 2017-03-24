import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
      };
      this.sendAction('save', params);
    },
  }
});
