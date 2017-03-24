import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.sendAction('save', params);
    },
  }
});
