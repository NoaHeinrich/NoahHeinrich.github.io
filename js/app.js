$(document).ready(function(){
  $(".nav-button").on('mouseover', function(event){
    event.preventDefault();
    $(this).css("background-color", "#3ac3c3")
  });
  $(".nav-button").on("mouseleave", function(event){
    event.preventDefault();
    $(this).css("background-color","#9ee1e1")
  });
  $("a").on("mouseover", function(event){
    event.preventDefault();
    $(this).css("color", "black")
  });
  $("#resume-button").on("click", function(event){
    event.preventDefault();
    $(this).hide();
    $("iframe").show();
  })
});