import Ember from 'ember';

export default Ember.Component.extend({
  questionContentShowing: false,
   actions: {
     toggleContent: function() {
       if (!this.questionContentShowing) {
         this.set('questionContentShowing', true);
       } else {
         this.set('questionContentShowing', false);
       }
     }
   }
 });
