"use strict";
/*navbar toggle*/

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/*** header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Login Page
function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "") {
    alert("Email is required");
    return false;
  }

  if (password === "") {
    alert("Password is required");
    return false;
  }

  return true;
}

//Product gallery
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

for (var i = 0; i < SmallImg.length; i++) {
  SmallImg[i].onclick = function(event) {
    ProductImg.src = event.target.src;
  };
}


// Menuju link pada shopping cart
document.addEventListener("DOMContentLoaded", function() {
  var basketButton = document.getElementById("basket-button");
  if (basketButton) {
    basketButton.addEventListener("click", function() {
      window.location.href = "shopping-cart.html";
    });
  }
});

// Menuju link menuju jordan 1 travis
document.addEventListener("DOMContentLoaded", function() {
  var basketButton = document.getElementById("shop-now-button");
  if (basketButton) {
    basketButton.addEventListener("click", function() {
      window.location.href = "jordan1-travis.html";
    });
  }
});



//SEARCH

// script.js
document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.getElementById('search-button');
  const searchLabel = document.getElementById('search-label');
  const searchInput = document.getElementById('search-input');

  searchButton.addEventListener('click', function(event) {
    event.stopPropagation();
    searchLabel.classList.toggle('show');
    searchInput.focus();
  });

  document.addEventListener('click', function(event) {
    const target = event.target;
    if (!target.closest('#search-label') && !target.closest('#search-button')) {
      searchLabel.classList.remove('show');
    }
  });

  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const searchQuery = searchInput.value;
      if (searchQuery.trim() !== '') {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(searchUrl, '_blank');
      }
    }
  });
});



// CATEGORIES
document.addEventListener("DOMContentLoaded", function() {
  const sortToggle = document.getElementById("sort-toggle");
  const categoriesToggle = document.getElementById("categories-toggle");
  const sizeToggle = document.getElementById("size-toggle");
  const genderToggle = document.getElementById("gender-toggle");
  const sortOptions = document.getElementById("sort-options");
  const categoriesOptions = document.getElementById("categories-options");
  const sizeOptions = document.getElementById("size-options");
  const genderOptions = document.getElementById("gender-options");

  // Menampilkan/menyembunyikan elemen saat tombol ditekan
  sortToggle.addEventListener("click", function() {
    sortOptions.classList.toggle("show");
  });

  categoriesToggle.addEventListener("click", function() {
    categoriesOptions.classList.toggle("show");
  });

  sizeToggle.addEventListener("click", function() {
    sizeOptions.classList.toggle("show");
  });

  genderToggle.addEventListener("click", function() {
    genderOptions.classList.toggle("show");
  });
});


// checkout alert
var checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", function() {
  // Membuat elemen popup pesan
  var popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = "<p>Thanks For Your Order!</p>";

  // Menambahkan elemen popup ke dalam body dokumen
  document.body.appendChild(popup);

  // Menghilangkan popup setelah 3 detik
  setTimeout(function() {
    popup.remove();
  }, 3000);
});
