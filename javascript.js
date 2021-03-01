let myMovieCollection = []

function Movie(title, director){
    this.title = title
    this.director = director
}

Movie.prototype.info = function(){
    console.log(`${this.title} was directed by ${this.director}`)
}

Movie.prototype.addToCollection = function(){
    myMovieCollection.push(this)
}

let bookNum = 0

const movie1 = new Movie("Jaws", "Steven Spielberg")
const movie2 = new Movie("Avatar", "James Cameron")
const movie3 = new Movie("Shaun of the Dead", "Edgar Wright")

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
    $(".content").html(msg)
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
    const movie4 = new Movie(title, director)
    movie4.addToCollection()
    displayCollection()
    let div = document.getElementById('new-entry')
    div.remove();
})

$(".content").on("click", '.remove-movie', function(){
    let div = $(this).parent()
    div.remove();
})