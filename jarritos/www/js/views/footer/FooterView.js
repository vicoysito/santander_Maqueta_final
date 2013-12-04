define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/footer/FooterTemplate.html'
], function($, _, Backbone, footerTemplate){

  var FooterView = Backbone.View.extend({
    
    el: $(".footer_menu"),

    initialize: function() {
	    
	    this.render();

    },

    render: function(){
          
      var compiledTemplate = _.template( footerTemplate );
      this.$el.html(compiledTemplate);
    }

  });

  return FooterView;
  
});
