/*
$("h1").css("color", "red");
$("h1").text("Yo");
$("h1").addClass("test-style").removeClass("test-style-x");
$("button").html("<em>Btn</em>");
console.log($("img").attr("src"));
$("a").attr("href", "https://youtube.com");
console.log($("h1").attr("class"));

$("button").click(function() { // Click event listener w/out for loop
  $("h1").css("color", "purple");
});

$("input").keydown(function(event) { // Keydown event listener
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() { // Flexible method for event listener
  $("h1").css("color", "purple");
  //.hide .show .fadeIn .fadeOut, .fadeToggle, .toggle, .slideUp, .slideDown methods which take them out of the HTML flow
});
*/

$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({margin: "0.5"});
});


