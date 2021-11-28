$(document).ready(function () {
  $(".banner-list").slick({
    infinite: true,
    prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fas fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fas fa-chevron-right'></i></button>",
    dots: true,
  });
});

$(".distribution-list").slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 7,
  prevArrow: "<button type='button' class='slick-prev2 slick-arrow2'><i class='fas fa-chevron-left'></i></button>",
  nextArrow: "<button type='button' class='slick-next2 slick-arrow2'><i class='fas fa-chevron-right'></i></button>",
});

handleChangQuantity();

function handleChangQuantity() {
  var delBtn = document.querySelector(".btn-del");
  var addBtn = document.querySelector(".btn-add");
  var formInput = document.querySelector(".product-input");
  var quantity = formInput.value;

  addBtn.addEventListener("click", () => {
    quantity++;
    formInput.value = quantity;
  });

  delBtn.addEventListener("click", () => {
    quantity--;
    formInput.value = quantity;
    if (quantity < 1) {
      quantity = 1;
      formInput.value = quantity;
    }
  });
}
