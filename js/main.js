const menuicon = document.querySelector('#menuicon');
const menu = document.querySelector('.navbar_menu');

menuicon.addEventListener("click", () => {
  menu.classList.toggle('active');
})


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5; // 동작의 구현이 시작되는 위치
var navbarHeight = $('header').outerHeight(); // 영향을 받을 요소를 선택

// 스크롤시에 사용자가 스크롤했다는 것을 알림
$(window).scroll(function (event) {
  didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

// 동작을 구현
function hasScrolled() {
  // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
  var st = $(this).scrollTop();

  // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
  if (Math.abs(lastScrollTop - st) <= delta) {
    return;
  }

  // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('header').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('header').removeClass('nav-up').addClass('nav-down');
    }
  }

  // lastScrollTop/*  */ 에 현재 스크롤위치를 지정한다.
  lastScrollTop = st;
}

/* 추가로 웹페이지의 스크롤을 내렸을때를 감지해 코드를 실행시키는 함수입니다.
$(window).scroll(function(){ 
  if($(window).scrollTop() == $(document).height() - $(window).height()){ 
      // 실행할 함수
  } 
});
*/

// ////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//   const aboutMeLink = document.querySelector('nav .navbar_menu li:nth-child(1) a');

//   aboutMeLink.addEventListener('click', function (event) {
//     event.preventDefault(); // 기본 동작 방지

//     const aboutMeSection = document.getElementById('AboutMe');
//     aboutMeSection.scrollIntoView({
//       behavior: 'smooth'
//     }); // 부드러운 스크롤
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('nav .navbar_menu li a');
  const contentItems = document.querySelectorAll()

  menuItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault(); // 기본 동작 방지

      const sectionId = this.getAttribute('href').substring(1); // href 속성에서 #을 제외한 값

      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        }); // 부드러운 스크롤
      }
    });
  });
});

// ////////////////////////////////////////////////


// //////////////////////////////////////////////////


/* <!--스크롤 이미지 애니메이션-- > */


/* $(document).ready(function () {
  $(window).scroll(function () {

    $('image').each(function (i) {

      var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({
          'opacity': '1'
        }, 700);
      }

    });
  });
}); */
