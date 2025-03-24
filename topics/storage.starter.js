/*
          __                                      
  _______/  |_  ________________     ____   ____  
 /  ___/\   __\/  _ \_  __ \__  \   / ___\_/ __ \ 
 \___ \  |  | (  <_> )  | \// __ \_/ /_/  >  ___/ 
/____  > |__|  \____/|__|  (____  /\___  / \___  >
     \/                         \//_____/      \/ 
*/

// 1 - click on the button, then add your name to localstorage in the key "myName"
document.getElementById("btn1").addEventListener("click", function() {
     const name = prompt("Enter your name:");
     if (name) {
         localStorage.setItem("myName", name);
     }
 });

// 2 - click on the button to read the value of "myName" from localstorage and display it span#myName
document.getElementById("btn2").addEventListener("click", function() {
     const storedName = localStorage.getItem("myName");
     document.getElementById("myName").textContent = storedName ? storedName : "(No name found)";
 });

// 3 - click on remove button to remove "myName" from localstorage
document.getElementById("btn3").addEventListener("click", function() {
     localStorage.removeItem("myName");
     document.getElementById("myName").textContent = "...";
 });

// 4 - click on the button to add a movie to the localstorage in the key "movies", show movies in the ul#movieList
// hint: the value of movies should be an array of strings
// hint: you can use JSON.stringify to convert an array to string
// hint: you can use JSON.parse to convert a string to array
// hint: you can use appendChild to add a new li to the ul#movieList
document.getElementById("btn4").addEventListener("click", function() {
     const movieInput = document.getElementById("movie");
     const movieTitle = movieInput.value.trim();
     if (!movieTitle) return;
     
     let movies = JSON.parse(localStorage.getItem("movies")) || [];
     movies.push(movieTitle);
     localStorage.setItem("movies", JSON.stringify(movies));
     
     displayMovies();
     movieInput.value = "";
 });
 
 function displayMovies() {
     const movieList = document.getElementById("movieList");
     movieList.innerHTML = "";
     let movies = JSON.parse(localStorage.getItem("movies")) || [];
     
     movies.forEach(movie => {
         const li = document.createElement("li");
         li.textContent = movie;
         movieList.appendChild(li);
     });
 }
 
 displayMovies();
