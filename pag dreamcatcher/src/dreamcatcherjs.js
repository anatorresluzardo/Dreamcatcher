function favoriteSong() {
  let name = prompt("What is your Name?");
  let genre = prompt("What is your favorite genre of music?");
  genre = genre.toLowerCase().trim();

  let h3 = document.querySelector("h3");

  if (genre === "rock") {
    h3.innerHTML = name + " your new favorite song is MAISON";
  } else {
    if (genre === "metal") {
      h3.innerHTML = name + " your new favorite song is Scream";
    } else {
      if (genre === "pop") {
        h3.innerHTML = name + " your new favorite song is Starlight";
      } else {
        if (genre === "ballad") {
          h3.innerHTML =
            name + " your new favorite song is A heart of sunflower";
        } else {
          h3.innerHTML = name + " your new favorite song is Odd eye";
        }
      }
    }
  }
}
let favoriteButton = document.querySelector("button");
favoriteButton.addEventListener("click", favoriteSong);
//sdf
