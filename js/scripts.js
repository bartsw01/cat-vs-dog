$(document).ready(function() {
  $("button#cat").click(function(){
    $("ul#cat").prepend("<li>meow</li>");
    $("ul#dog").prepend("<li>woof</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog").click(function(){
    $("ul#dog").prepend("<li>woof!</li>");
    $("ul#cat").prepend("<li>meow</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });

  });
  $("button#both").click(function(){
    $("ul#dog").prepend("<li><img width='100%' src='img/dog.jpg'></li>");
    $("ul#cat").prepend("<li><img width='100%' src='img/cat.jpg'></li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });

  });
});
