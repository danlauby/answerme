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
          question: this.get('question'),
          notes: this.get('notes'),
        };
        this.set('updaQuestionForm', false);
        this.sendAction('update', question, params);
      }
    }
  });
