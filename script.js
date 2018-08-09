$('#input').keyup(function(){
    searchTitle = $(this).val();
        if (searchTitle.length > 3) {
        search(searchTitle);
    }
})

function search(searchTitle) {
    $.ajax({
        type: 'GET',
        url: 'http://www.omdbapi.com/?apikey=4896ff0a',
        data: {
        t: searchTitle
    },
    success: function(response) {
        if (response.Response === 'False') {
            $('#results').html('<p id="none">No Results</p>');
            $('#poster').html('');
        } else {
            console.log(response);
            $('#poster').html('<img src="' + response.Poster + '" />');
            $('#results').html('<div>Title: ' + response.Title + '</div><div>Genre: ' + response.Genre + '</div><div>Rating: ' + response.Ratings[0].Value + '</div>');
            }
        }
    })
}