let myMovieCollection = []

function Movie(title, director){
    this.title = title
    this.director = director
}

Movie.prototype.addToCollection = function(){
    myMovieCollection.push(this)
}

function displayCollection(){
    let msg = ""
    for (let movie of myMovieCollection) {
        let title = movie.title
        let director = movie.director
        let card = "<div class='card'>\
                        <div class='title'>"+title+"</div>\
                        <div class='director'>"+director+"</div>\
                        <div class='remove-movie'>Remove</div>\
                    </div>"
        msg += card
    }
    localStorage.setItem("movies", JSON.stringify(myMovieCollection));
    $(".content").html(msg)
}

function removeEntry(title){
    for (let movie of myMovieCollection){
        if (movie.title == title){
            let index = myMovieCollection.indexOf(movie)
            myMovieCollection.splice(index, 1)
        }
    }
}

$('.new-movie').on("click", function(e) {
    e.preventDefault()
    $("body").append("<div id='new-entry' class='new-entry'>\
                            <form id='movie-form'>\
                                <input type='text' id='title'\
                                 placeholder='Movie Title' class='title-form'>\
                                <input type='text' id='director'\
                                 placeholder='Director Name'class='director-form'>\
                                <div class='submit-button'>Add Movie to Collection</div>\
                            </form>\
                        </div>")
})

$('body').on("click", '.submit-button', function(e){
    e.preventDefault()
    let title = document.getElementById('title').value;
    let director = document.getElementById('director').value;
    const movie = new Movie(title, director)
    movie.addToCollection()
    displayCollection()
    let div = document.getElementById('new-entry')
    div.remove();
})

$(".content").on("click", '.remove-movie', function(){
    let parentDiv = $(this).parent()
    let title = $(parentDiv).find('.title').text()
    removeEntry(title)
    displayCollection()
})

let storage = JSON.parse(localStorage.getItem("movies"))
for (movie of storage){
    myMovieCollection.push(movie)
}
displayCollection()