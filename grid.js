$("#button").click(function(){   $(".container").empty();                      squares = prompt("How many squares would you like on each side?");
       for (i = 1; i <=(squares * squares); i++) {
  $container.append('<div class="item">' + '</div>');
           
}


                              $("#top").append($container);  
  $(".item").css("width", ((710 -(squares * 2))/squares));
  $(".item").css("height", ((710 -(squares * 2))/squares));
   $(".item").hover(function(){
    $(this).css("background", getRandomColor());}, function(){
        $(this).css("background", "white");});                           
                             });

var $container = $('<div class = "container"/>');

function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
        


