import Ember from 'ember';

  export default Ember.Component.extend({
    updateQuestionForm: false,
    actions: {
      toggleQuestionUpdateForm: function() {
        if (!this.updateQuestionForm) {
          this.set('updateQuestionForm', true);
        } else {
          this.set('updateQuestionForm', false);
        }
      },
      update(question) {
        var params = {
          author: this.get('author'),
          content: this.get('content'),
          notes: this.get('notes'),
        };
        this.set('updateQuestionForm', false);
        this.sendAction('update', question, params);
      }
    }
  });
