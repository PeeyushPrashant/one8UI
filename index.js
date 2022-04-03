const drawerBtn = document.querySelector("#data-drawar");
const drawer = document.querySelector(".drawar");
const backdrop = document.querySelector(".backdrop");

if (drawerBtn) {
  drawerBtn.addEventListener("click", () => {
    backdrop.style.display = "block";
    drawer.style.transform = "translateX(0)";
  });
}

backdrop.addEventListener("click", () => {
  backdrop.style.display = "none";
  drawer.style.transform = "translateX(-100%)";
});

/*rating JS*/

const ratingStars = [...document.getElementsByClassName("rating-star")];
console.log(ratingStars.length);
const finalRating = document.querySelector(".rating-result");

ratingResult(finalRating);

function executeRating(stars, result) {
  const starClassActive = "rating-star fas fa-star icon-md";
  const starClassUnactive = "rating-star far fa-star icon-md";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className.indexOf(starClassUnactive) !== -1) {
        ratingResult(result, i + 1);
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        ratingResult(result, i);
        for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
      }
    };
  });
}

function ratingResult(result, num = 0) {
  result.textContent = `You Rated: ${num}/5`;
}

executeRating(ratingStars, finalRating);
