$(document).ready(function() {
  $('#start').click(function() {
    var gridSize = prompt("How many squares on each side of your grid? (2 - 100)", "16")
    if (gridSize >= 2 && gridSize <= 100) {
      if (!document.getElementById('black')) {
        $('#start').text('Change Grid Size');
        $('#header').append('<button id = "black" class = "active">Black</button>');
        $('#header').append('<button id = "white" class = "sButton">White</button>');
        $('#header').append('<button id = "clear" class = "sButton">Clear</button>');
      };

      $('#grid').empty();
      for (var i = 0; i < gridSize; i++) {
        $('#grid').append('<div class="row"><div>');
        $('.row').height((600 / gridSize) - 1);
      };
      for (var x = 0; x < gridSize; x++) {
        $('.row').append('<div class="column"><div>');
        $('.column').width((600 / gridSize) - 1);
      };

      $('.column').on('mouseenter', function() {
        $(this).css('background-color', 'black');
      });

      $('#black').click(function() {
        $('button').removeClass().addClass('sButton');
        $('#black').removeClass('sButton').addClass("active");
        $('.column').on('mouseenter', function() {
          $(this).css('background-color', 'black');
        });
      });

      $('#white').click(function() {
        $('button').removeClass().addClass('sButton');
        $('#white').removeClass('sButton').addClass("active");
        $('.column').on('mouseenter', function() {
          $(this).css('background-color', 'white');
        });
      });

      $('#clear').click(function() {
        $('.column').css('background-color', '#ccccff');
      });

    }
    else {
      alert("Invalid Grid Size! (Please enter a number between 2 and 100)");
    }
  });
});
