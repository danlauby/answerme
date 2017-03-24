import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionFormShowing: false,
actions: {
  toggleQuestionForm: function() {
    if (!this.newQuestionFormShowing) {
      this.set('newQuestionFormShowing', true);
    } else {
      this.set('newQuestionFormShowing', false);
    }
  },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
