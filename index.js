$(document).ready(function(){


  $('.navigation').on('mouseover', function(e){
  e.preventDefault()
    $(this).animate({fontSize: "30px"});
  });

  $('.navigation').on('mouseleave', function(e){
  e.preventDefault()
    $(this).animate({fontSize: "20px"});
  });
});