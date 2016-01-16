$('.trigger').on('click', function(){
  $(".hidden").slideDown("slow");
});
$('#close').on('click', function(){
  $(".hidden").slideUp("slow");
});