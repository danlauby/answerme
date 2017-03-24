import Ember from 'ember';

export default Ember.Route.extend({
  questions: this.store.findAll('question'),
  answers: this.store.finadAll('answers')
});
