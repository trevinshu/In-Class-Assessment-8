window.addEventListener("load", function (e) {
  const rentalRequest = fetch("./js/data.json");
  // sorce of data
  let store = [];
  rentalRequest
    .then((response) => response.json())
    .then((data) => {
      // data
      // spread operator does makes a new array
      // object and arrays []  = [...array]
      // {} = {...obj}
      store = [...data];
      const rentalMarkup = createRentalMarkup();
      // make the markup
    });
  const createRentalMarkup = function () {
    const rentalDisplay = document.querySelector(".rentals");
    const markup = store.map(function (rental) {
      const rating = rental.starRating.split("(");
      const imagePath = `./img/thumbnails/${rental.thumbnail}`;
      const template = `<aside class="rental">
      <header>
        <img
          class="thumbnail"
          src="${imagePath}"
          width="290"
          height="168"
          alt="rental accomidation"
        />
      </header>
      <ul class="details">
        <li class="location">${rental.location}</li>
        <li class="type">${rental.rentalType}</li>
        <li class="price"><span>$${rental.dailyRate}</span>${rental.currency}</li>
        <li class="description">
        ${rental.description}
        </li>
        <li class="rating">
          <img
            class="star-icon"
            src="img/icons/rating.svg"
            alt="star rating"
            width="16"
            height="16"
          />
          <span>${rating[0]}</span>
          <span>(${rating[1]}</span>
        </li>
      </ul>
    </aside>`;
      rentalDisplay.insertAdjacentHTML("afterbegin", template);
    });
  };
});
