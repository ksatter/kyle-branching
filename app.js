


var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    for (var i = 0; i < response.data.length; i++) {
        var currentGif = response.data[i];

        var $card = $("<div>").addClass("card")

        var $img = $("<img>").attr("src", currentGif.images.fixed_width.url).attr("alt", "Trending Gif #" + (i + 1))

        var $cBody = $("<div>").addClass("card-body");

        var $cTitle = $("<h5>").addClass("card-title").text(currentGif.rating)

        $cBody.append($cTitle);

        $card.append($img, $cBody)

        $("#gifs").append($card)

        //Here is my comment
    }
  });