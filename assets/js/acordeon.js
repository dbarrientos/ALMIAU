(function($){ 
  $(document).ready(function(){
    $("#rifa .acordeon-item .header").on('click',function(){
      $("#rifa .acordeon-item .body").hide();
      $(this).parent().children('.body').show();
    });
  });
})(jQuery);
