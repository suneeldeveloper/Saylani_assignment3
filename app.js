
var data = []
var filterByLanguage = 'Engli';
(async function () {
//   const response = await fetch('http://127.0.0.1:5500/data.json');
//   let movies = await response.json();


//   displayMovies(movies);

//   function displayMovies(movies){
//     let movieList = document.getElementById('movie-list');
//     movieList.innerHTML = ''
//     movies.filter(v=> v.language.includes('')).forEach((movie, inde) => {
//       let movieItem = document.createElement('div');
//       movieItem.innerHTML = `
//       <p>${inde}</p>
//       <h2> ${movie.title} </h2>
//       <span> ${movie.language} </span>
//       <p>${movie.genres}</p>
//       <p>${movie.release_date}</p>
//       <p>${movie.vote_average}</p>
   
//       `
//       movieList.appendChild(movieItem);
//     });
//   }


  // const newLocal = movies.filter(function (item) {
  //   return item.genres === 'Family';

  // });
  // var newArray = newLocal;
  // console.log(newArray)
  

  // const languageFilters = document.querySelectorAll("input[name='language']");
  // languageFilters.forEach(function (filter) {
  //   filter.addEventListener("change", function () {
  //     const filteredMovies = movies.filter(function (lang) {
  //       return languageFilters(function (movies) {
  //         return movies.checked && lang.language === movies.value;
  //       });
  //     });

  //     const filteredList = document.getElementById("filtered-list");
  //     filteredList.innerHTML = " ";

  //     filteredMovies.forEach(function (person) {
  //       const listItem = document.createElement("li");
  //       listItem.innerText = `${person.language})`;
  //       filteredList.appendChild(listItem);

  //       console.log(listItem)
  //     });
  //   });
  // });


  const response = await fetch('http://127.0.0.1:5500/data.json');
  let movies = await response.json();
  data = movies
  renderData(data)  
})();

let movieList = document.getElementById('movie-list');
movieList.innerHTML = ''

function renderData(data){
  // alert('')
  // data.filter(v=> v.language.toLowerCase().includes(filterByLanguage.toLowerCase())).forEach((movie, inde) => {
  //   let movieItem = document.createElement('div');
  //   movieItem.innerHTML = `
  //   <p>${inde}</p>
  //   <h2> ${movie.title} </h2>
  //   <span> ${movie.language} </span>
  //   <p>${movie.genres}</p>
  //   <p>${movie.release_date}</p>
  //   <p>${movie.vote_average}</p>
  //   `
  //   movieList.appendChild(movieItem);
  // });
}



  function getComboA(selectObject) {
    var value = selectObject.value;  
    console.log(value)
    filterByLanguage = value;
      data.filter(v=> v.language.toLowerCase().includes(value.toLowerCase())).forEach((movie, inde) => {
        let movieItem = document.createElement('div');
        movieItem.innerHTML = `
        <p>${inde}</p>
        <h2> ${movie.title} </h2>
        <span> ${movie.language} </span>
        <p>${movie.genres}</p>
        <p>${movie.release_date}</p>
        <p>${movie.vote_average}</p>
        `
        movieList.appendChild(movieItem);
      });
  }


  






