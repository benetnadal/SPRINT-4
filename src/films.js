// Exercise 1: Get the array of all directors.

getAllDirectors = (arrayMovies) => {
  let directors = arrayMovies.map(person => person.director);
  //console.log("EXERCICE 1 ->", directors);
  return directors; 
}         
//getAllDirectors(movies); 

//------------------------------------------------------------------------

// Exercise 2: Get the films of a certain director
// function getMoviesFromDirector(array, director) {

getMoviesFromDirector = (arrayMovies, director) => { 
  let films =  arrayMovies.filter(person => { if(person.director === director) return person.title})//.map(film => film.title);
  //console.log("EXERCISE 2 ->", films);
  return films;
}
//getMoviesFromDirector(movies, 'Francis Ford Coppola');

//---------------------------------------------------------------

// Exercise 3: Calculate the average of the films of a given director.


moviesAverageOfDirector = (arrayMovies, director) => {            
            
  let averageMoviesDirector = ((arrayMovies.filter(person => {if(person.director === director) return person.director}).map(film => {return film.score}).reduce((scoreAccumulator,currentScore) => {return(scoreAccumulator + currentScore)})/(arrayMovies.filter(person => {if(person.director === director) return person.director}).length))).toFixed(2);
  //console.log("EXERCISE 3 ->", averageMoviesDirector);
  return +averageMoviesDirector;
}

//moviesAverageOfDirector(movies, 'Francis Ford Coppola')

// Exercise 3.1:

moviesAverage = (arrayMovies) => {
  let scoreMovWoEmpty = []
  let scoreMovies = arrayMovies.map(film => film.score).forEach(element => {if(element != ""){return scoreMovWoEmpty.push(element)}} );
  let averageMovies = (scoreMovWoEmpty.reduce((scoreAccumulate,currentScore) => {return(scoreAccumulate + currentScore)}) / (scoreMovWoEmpty.length)).toFixed(2);

  //console.log("EXERCISE 3.1 ->", averageMovies);
  return +averageMovies
}
//moviesAverage(movies);

//---------------------------------------------------------------

// Exercise 4:  Alphabetic order by title 
//function orderAlphabetically(array) {
//}

orderAlphabetically = (arrayMovies) => {

  let orderTitle = arrayMovies.map(a => a).sort((firstElement, secondElement) => {
     if (firstElement.title < secondElement.title) return -1;
     else if(firstElement.title > secondElement.title) return 1;
     else return 0
 }).map(film => film.title).slice(0, 20);
             
 //console.log("EXERCISE 4 ->", orderTitle);
 return orderTitle
}
//orderAlphabetically(movies);    

//---------------------------------------------------------------
        
// Exercise 5: Order by year, ascending
//function orderByYear() {
//}

orderByYear = (arrayMovies) => {


  let orderYear = arrayMovies.map(a => a).sort((firstElement, secondElement) => {
    if(firstElement.year == secondElement.year) {
      if(firstElement.title == secondElement.title) {return 0;}
      else {return(firstElement.title < secondElement.title)? -1:1}
    }
    
    else {return (firstElement.year < secondElement.year)? -1: 1;}})

    //console.log("EXERCISE 5 ->", orderYear);

    return orderYear            
  }

//orderByYear(movies);




// Exercise 6: Calculate the average of the movies in a category
//function moviesAverageByCategory() {}



moviesAverageByCategory = (arrayMovies, category) => { 

  let genreMovies = arrayMovies.filter(filmGenre => {return filmGenre.genre.includes(category)})// return filmGenre.genre})//.map(filmGenre => filmGenre.score);
  console.log(genreMovies)
  //console.log("EXERCICE 6 ->", moviesAverage(genreMovies));
  return moviesAverage(genreMovies)
  }

  //moviesAverageByCategory(movies, 'Biography')   



// Exercise 7: Modify the duration of movies to minutes
//function hoursToMinutes() {}


hoursToMinutes = (arrayMovies) => {         
        
  num = (text) =>{  
  let hours = text.split("h");
  if(hours[1] != ""){
  let minutes = hours[1].split("m");
  let totalMinutes = parseInt(hours[0] * 60) + parseInt(minutes[0]);
  return totalMinutes 
  } else {totalMinutes = parseInt(hours[0] * 60); return totalMinutes}}

let result = arrayMovies.map(a=>a).map(element => ({...element, duration: num(element.duration) } ))

   return result        
}


// Exercise 8: Get the best film of a year
//function bestFilmOfYear() {}



bestFilmOfYear = (arrayMovies, year) => {

  let bestMovie = arrayMovies.map(a => a).filter(dateYear => 
  {if(dateYear.year == year) return dateYear.score}).sort((firstElement,secondElement) => {return (secondElement.score - firstElement.score)}).slice(0,1)
    
  return bestMovie
  }
  

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
