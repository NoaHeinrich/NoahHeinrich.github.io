$(document).ready(function(){
  $(".nav-button").on('mouseover', function(event){
    event.preventDefault();
    $(this).css("background-color", "#2E9C9C")
  });
  $(".nav-button").on("mouseleave", function(event){
    event.preventDefault();
    $(this).css("background-color","#77D5D5")
  });
  $("a").on("mouseover", function(event){
    event.preventDefault();
    $(this).css("color", "black")
  });
});