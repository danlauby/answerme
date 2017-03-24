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
        content: this.get('content'),
        notes: this.get('notes'),
        answers: this.get('answer')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
