// Exercise 1: Get the array of all directors.

getAllDirectors = (array) => {
  let result = array.map(persona => persona.director);
 console.log("EXERCICE 1 ->", result);
  return result; 
}         
//getAllDirectors(movies);
//console.log(getAllDirectors(movies) instanceof Array);

//------------------------------------------------------------------------

// Exercise 2: Get the films of a certain director
// function getMoviesFromDirector(array, director) {

getMoviesFromDirector = (array, director) => { 
  let result =  array.filter(x => { if(x.director === director) return x.director}).map(x => x.title);
  console.log("EXERCISE 2 ->", result);
  return result;
}
//getMoviesFromDirector(movies, 'Francis Ford Coppola');


//---------------------------------------------------------------

// Exercise 3: Calculate the average of the films of a given director.


moviesAverageOfDirector = (array,director) => {            
            
  let result = (array.filter(x => {if(x.director === director) return x.director}).map(x => {return x.score}).reduce((a,b) => {return(a+b)})/(array.filter(x => {if(x.director === director) return x.director}).length));
  console.log("EXERCISE 3 ->", result.toFixed(2));
  return result;}

  //moviesAverageOfDirector(movies, 'Francis Ford Coppola')

//---------------------------------------------------------------


// Exercise 4:  Alphabetic order by title 
//function orderAlphabetically(array) {
//}


     let orderAlphabetically = (array) => {
            let result = array.sort((a, b) => {
                if (a.title < b.title) return -1;
            });
            console.log("EXERCISE 4 ->",result.map(x => x.title).slice(0, 20))
        }
       // orderAlphabetically(movies); 

//---------------------------------------------------------------
        
// Exercise 5: Order by year, ascending
//function orderByYear() {
//}



// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
