// 페이지 로드 시 실행되는 함수
window.onload = function () {
  let inputElement = document.getElementById("search-box");
  let defaultSearchTerm = "갤럭시 Z 플립5"; // 기본

  inputElement.value = defaultSearchTerm;
};
//top button 나타나기
$(window).scroll(function () {
  let scrollPosition = $(window).scrollTop();
  let windowHeight = $(window).height();

  if (scrollPosition > windowHeight) {
    $('.top_bt').show();
  } else {
    $('.top_bt').hide();
  }
});

//#top
$('.top_bt').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
});


//검색창 이벤트 처리
$('.search').click(function () {
  let srchPop = $(".top_searchbar");
  let cartDiv = $(".cart_list");
  let mypagePop = $(".mypage-pop");
  let wrap = $(".wrap");

  if (srchPop.css("visibility") === "hidden") {
    mypagePop.css("display", "none"); // 다른 컨텐츠 닫기
    cartDiv.css("display", "none"); // 다른 컨텐츠 닫기
    srchPop.css("visibility", "visible");
    wrap.addClass("dimd-active"); // .wrap에 dimd-active 클래스 추가


  } else {
    srchPop.css("visibility", "hidden");
    wrap.removeClass("dimd-active"); // .wrap에서 dimd-active 클래스 제거

    let scrollPosition = parseInt($("body").css('top'));

    // body 요소의 position과 top 값을 초기화하여 스크롤 위치 복원
    $("body").css({
      position: "",
      top: ""
    });

    window.scrollTo(0, Math.abs(scrollPosition)); // 이전 스크롤 위치로 이동
  }
});




//utility 버튼 클릭 이벤트 처리
$("#cart").on("click", function () {
  let cartDiv = $(".cart_list");
  let mypagePop = $(".mypage-pop");
  let wrap = $(".wrap");

  if (cartDiv.css("display") === "none") {
    cartDiv.css("display", "block");
    mypagePop.css("display", "none"); // 다른 컨텐츠 닫기
    wrap.addClass("dimd-active"); // .wrap에 dimd-active 클래스 추가
  } else {
    cartDiv.css("display", "none");
    wrap.removeClass("dimd-active"); // .wrap에서 dimd-active 클래스 제거
  }
});

$("#myinfor").on("click", function () {
  let cartDiv = $(".cart_list");
  let mypagePop = $(".mypage-pop");
  let wrap = $(".wrap");

  if (mypagePop.css("display") === "none") {
    mypagePop.css("display", "block");
    cartDiv.css("display", "none"); // 다른 컨텐츠 닫기
    wrap.addClass("dimd-active"); // .wrap에 dimd-active 클래스 추가
  } else {
    mypagePop.css("display", "none");
    wrap.removeClass("dimd-active"); // .wrap에서 dimd-active 클래스 제거
  }
});

//플로팅 사이드 메뉴
$('.plus_menu').on("click", function () {
  let chatMenuList = $(".chat-menu");

  if (chatMenuList.css("display") === "none") {
    chatMenuList.css("display", "block");
  } else{
    chatMenuList.css("display", "none");
  }
});


/***
 * 
 * bannrt slide
* ** */
const slides = $('slid_wrap li');
let n = 0;
function slide() {
  slides.removeClass('on')
  slides.eq(n).addClass('on')
  n++; /* 변수+1 */
  if (n >= slides.length) { n = 0 }
}
setInterval(() => {
  slide();
}, 1500);
slides.eq(n).addClass('on')
// $(document).ready(function(){
//   $(".slid_wrap").bxSlider({
//     auto: true,
//   });
// });


/***
 * 
 * contants
* ** */
/***
 * 
 * contants
* ** */
const buttons = document.querySelectorAll('.tab_title button');
const sliderDivs = document.querySelectorAll('.tab_slider > div');

// 초기 활성화 상태 설정
buttons[0].parentElement.classList.add('on');
sliderDivs[0].classList.add('on');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');

    // 모든 버튼과 슬라이더 div에서 .on 클래스 제거
    buttons.forEach((btn) => btn.parentElement.classList.remove('on'));
    sliderDivs.forEach((div) => div.classList.remove('on'));

    // 해당 버튼과 식별자에 맞는 슬라이더 div에 .on 클래스 추가
    button.parentElement.classList.add('on');

    const targetSliderDiv = document.querySelector(`.${target}`);
    if (targetSliderDiv) {
      targetSliderDiv.classList.add('on');
    }
  });
});

//이용약관
$('.use-terms').click(function () {
  if ($('.b1').is(':visible')) {
    $('.b1').hide();
  } else {
    $('.b1').show();
    $('.b2').hide();
  }
});

$('.persnal-terms').click(function () {
  if ($('.b2').is(':visible')) {
    $('.b2').hide();
  } else {
    $('.b2').show();
    $('.b1').hide();
  }
});
