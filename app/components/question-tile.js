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
     },
     update(question, params) {
     Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         question.set(key,params[key]);
       }
     });
     question.save();
     this.transitionTo('index');
   },
   }
 });
