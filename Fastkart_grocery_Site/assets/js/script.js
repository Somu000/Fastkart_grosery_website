(function ($) {
  "use strict";
  /*=====================
    01. Image to background js
    ==========================*/
  $(".bg-top").parent().addClass("b-top");
  $(".bg-bottom").parent().addClass("b-bottom");
  $(".bg-center").parent().addClass("b-center");
  $(".bg-left").parent().addClass("b-left");
  $(".bg-right").parent().addClass("b-right");
  $(".bg_size_content").parent().addClass("b_size_content");
  $(".bg-img").parent().addClass("bg-size");
  $(".bg-img.blur-up").parent().addClass("blur-up lazyload");
  $(".bg-img").each(function () {
    var el = $(this),
      src = el.attr("src"),
      parent = el.parent();

    parent.css({
      "background-image": "url(" + src + ")",
      "background-size": "cover",
      "background-position": "center",
      "background-repeat": "no-repeat",
      display: "block",
    });

    el.hide();
  });

  /*=====================
    02. Shop Page Grid Setting Js
    ==========================*/
  $(".grid-option li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".grid-option .grid-btn").on("click", function () {
    $(".product-list-section").removeClass("list-style");
  });
  $(".grid-option .list-btn").on("click", function () {
    $(".product-list-section").addClass("list-style");
  });
  $(".three-grid").on("click", function (e) {
    $(".product-list-section")
      .removeClass(
        "row-cols-xxl-5 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 list-style"
      )
      .addClass("row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2");
  });
  $(".grid-btn").on("click", function (e) {
    $(".product-list-section")
      .removeClass(
        "row-cols-xxl-5 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 list-style"
      )
      .addClass(
        "row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2"
      );
  });
  $(".five-grid").on("click", function (e) {
    $(".product-list-section")
      .removeClass("list-style")
      .addClass(
        "row-cols-xxl-5 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2"
      );
  });
  var contentwidth = $(window).width();
  if (contentwidth < "1199") {
    $(".grid-options ul .grid-btn").addClass("active");
  }
  if (contentwidth < "1399") {
    $(".grid-options ul .three-grid").addClass("active");
  }
})(jQuery);
 
/*=====================
  03. btn-cart open close js
   ==========================*/
$(document).ready(function () {
  $(".button-item").on("click", function () {
    $(".item-section").addClass("active");
  });

  $(".close-button").on("click", function () {
    $(".item-section").removeClass("active");
  });

  $(".btn-cart").on("click", function () {
    setTimeout(function () {
      $(".item-section").addClass("active");
    }, 1500);
    setTimeout(function () {
      $(".item-section").removeClass("active");
    }, 5000);
  });
});

/*=====================
  04. quantity js
   ==========================*/
$(".qty-box .quantity-right-plus").on("click", function () {
  var $qty = $(this).parents(".qty-box").find(".input-number");
  var currentVal = parseInt($qty.val(), 10);
  if (!isNaN(currentVal)) {
    $qty.val(currentVal + 0);
  }
});
$(".qty-box .quantity-left-minus").on("click", function () {
  var $qty = $(this).parents(".qty-box").find(".input-number");
  var currentVal = parseInt($qty.val(), 10);
  if (!isNaN(currentVal) && currentVal > 0) {
    $qty.val(currentVal - 0);
  }
});

/*=====================
   06. User Dashboard Left Sidebar Show Js
   ==========================*/
$(".left-dashboard-show").click(function () {
  $(".bg-overlay, .dashboard-left-sidebar").addClass("show");
});
$(".close-button, .bg-overlay, .user-nav-pills .nav-item .nav-link").click(
  function () {
    $(".bg-overlay, .dashboard-left-sidebar").removeClass("show");
  }
);
  
/*=====================
  07. header Dropdown Js
 ==========================*/
$(".dropdown-menu li a").on("click", function () {
  var a = $(this).closest("a");
  var getSampling = a.text();
  var getImage = a.find("img").attr("src");

  // console.log("src path", getImage);
  $(this)
    .closest(".dropdown-menu")
    .prev(".dropdown-toggle")
    .find("span")
    .text(getSampling);
  $(this)
    .closest(".dropdown-menu")
    .prev(".dropdown-toggle")
    .find("img")
    .attr("src", getImage);
}); 

/*=====================
  08. active class Js
   ==========================*/
$(".product-packege .select-packege li a").click(function () {
  $("li a").removeClass("active");
  $(this).addClass("active");
});

/*=====================
  09. Scroll down header fix js
   ==========================*/
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
}); 

/*=====================
10. category box js
==========================*/
var contentwidth = $(window).width();
if (contentwidth < "767") {
  $(".onhover-category-list .category-name").append(
    '<span class="according-menu">+</span>'
  );
  $(".category-name").on("click", function () {
    $(".category-name")
      .removeClass("active")
      .find("span")
      .replaceWith('<span class="according-menu">+</span>');
    $(".onhover-category-list .onhover-category-box").slideUp("normal");
    if ($(this).next().is(":hidden") == true) {
      $(this).addClass("active");
      $(this).find("span").replaceWith('<span class="according-menu">-</span>');
      $(this).next().slideDown("normal");
    } else {
      $(this).find("span").replaceWith('<span class="according-menu">+</span>');
    }
  });
  $(".accordion-box").hide();
}

/*=====================
11. Sidebar Hide & Show Js
 ==========================*/
$(".navbar-toggler-icon-2").click(function () {
  $(".bg-overlay, .sidebar-col").addClass("show");
});
$(".bg-overlay").click(function () {
  $(".bg-overlay, .sidebar-col").removeClass("show");
});
