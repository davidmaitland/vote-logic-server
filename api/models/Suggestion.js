/**
* Suggestion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    suggestion: {
      type: 'string',
      required: true,
      minLength: 5
    },

    description: {
      type: 'string',
      required: true,
      minLength: 5
    },

    email: {
      type: 'string',
      required: false
    },

    votes: {
      collection: 'vote',
      via: 'suggestion'
    },

    notes: {
      collection: 'note',
      via: 'suggestion'
    },

    tags: {
      collection: 'tag',
      via: 'suggestions'
    },

    getTotal: function() {

      var votes = this.votes;
      var total = 0;

      for (i in votes) {
        total += votes[i].votes;
      }

      return total;
    },

    toJSON: function() {
      var obj = this.toObject();

      try {
        obj.total = obj.getTotal();
      } catch(e) {
        obj.total = 0;
      }

      return obj;
    }

  }

};

