// 페이지 로드 시 실행되는 함수
window.onload = function () {
  let inputElement = document.getElementById("search-box");
  let defaultSearchTerm = "갤럭시 Z 플립5"; // 기본

  inputElement.value = defaultSearchTerm;
};

/*
//top button 나타나기
*/
$(window).scroll(function () {
  let scrollPosition = $(window).scrollTop();
  let windowHeight = $(window).height();

  if (scrollPosition > windowHeight) {
    $('.top_bt').show();
  } else {
    $('.top_bt').hide();
  }
});

/*
//#top
*/
$('.top_bt').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
});

/*
//검색창 이벤트 처리
*/
const srchPop = $(".top_searchbar");
const cartDiv = $(".cart_list");
const mypagePop = $(".mypage-pop");
const dim = $(".dimd-active");
let dimd = $(".dimd");
$('.search').on('click', function () {
  mypagePop.css("display", "none"); // 다른 컨텐츠 닫기
  cartDiv.css("display", "none"); // 다른 컨텐츠 닫기
  srchPop.css("visibility", "visible");
  dim.css("display", "block"); // dim 추가
  $('html').addClass('modal'); //scroll제어
});
$('.bt_searchbar_close').on('click', function () {
  srchPop.css("visibility", "hidden");
  dim.css("display", "none"); // dim 제거
  $('html').removeClass('modal'); //scroll제어
});


/*
//utility 버튼 클릭 이벤트 처리
*/

$('#cart').on("mouseenter", function () {
  if (cartDiv.css("display") === "none") {
    mypagePop.css("display", "none"); // 다른 컨텐츠 닫기
    cartDiv.css("display", "block");
    dimd.css("display", "block"); // dim 추가
  }
})
$('#cart').on("mouseleave", function () {
  cartDiv.css("display", "none");
  mypagePop.css("display", "none");
  dimd.css("display", "none"); // dim 제거
})

dimd.on("mouseenter", function () {
  cartDiv.css("display", "none");
  mypagePop.css("display", "none");
  dimd.css("display", "none"); // dim 제거
})

$("#myinfor").on("mouseenter", function () {
  if (mypagePop.css("display") === "none") {
    mypagePop.css("display", "block");
    cartDiv.css("display", "none"); // 다른 컨텐츠 닫기
    dimd.css("display", "block"); // dim 추가
  }
});
$('#myinfor').on("mouseleave", function () {
  cartDiv.css("display", "none");
  mypagePop.css("display", "none");
  dimd.css("display", "none"); // dim 제거
})

dimd.on("click", function () {
  mypagePop.css("display", "none");
  cartDiv.css("display", "none");
  dimd.css("display", "none"); // dim 제거
  $('html').removeClass('modal'); //scroll제어
})

/*
//플로팅 사이드 메뉴
*/
$('.plus_menu').on("click", function () {
  let chatMenuList = $(".chat-menu");
  let plusMenu = $('.plus_menu');

  if (chatMenuList.css("display") === "none") {
    chatMenuList.css("display", "block");
    plusMenu.addClass('active');
  } else {
    chatMenuList.css("display", "none");
    plusMenu.removeClass('active');
  }
});

// menu dim 처리
const dept1Items = $('.dept1 li');
const dept2Items = $('.dept2');

dept1Items.on('mouseover', function () {
  const index = dept1Items.index(this);
  const dept2Item = dept2Items.eq(index);

  if (dept2Item.css('visibility') === 'visible') {
    dimd.css("display", "block");
  } else {
    dimd.css("display", "none");
  }
});


/*
// banner slide
*/
$('.showcase').bxSlider({
  mode: 'fade',
  auto: true,
  nextSelector: '.showcase_controls .next',
  prevSelector: '.showcase_controls .prev',
  pagerCustom: '.showcase_pager',
  autoDelay: 1,
  stopAutoOnClick: true,
})


/*
//contants
*/
const buttons = document.querySelectorAll('.tab_title button');
const sliderDivs = document.querySelectorAll('.tab_slider > div');

// 초기 활성화 상태 설정
buttons[0].parentElement.classList.add('on');
sliderDivs[0].classList.add('on');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');

    buttons.forEach((btn) => btn.parentElement.classList.remove('on'));
    sliderDivs.forEach((div) => div.classList.remove('on'));

    button.parentElement.classList.add('on');

    const targetSliderDiv = document.querySelector(`.${target}`);
    if (targetSliderDiv) {
      targetSliderDiv.classList.add('on');
    }
  });
});


/* contents 3 */



/* content7 story */ 
const stTxtLi = $('.st_txt_list li');
const stImgLi = $('.story_slide_img .stImg');
let lastHoveredLi = null;

// 해당 li에 마우스 진입 시 'selet' 클래스 추가 및 lastHoveredLi 갱신
stTxtLi.on('mouseenter', function () {
  const index = $(this).index();
  $(this).addClass('selet').siblings().removeClass('selet');
  stImgLi.eq(index).addClass('selet').siblings().removeClass('selet');
  lastHoveredLi = this;
});

// 해당 li에서 마우스 이탈 시 'selet' 클래스 제거
stTxtLi.on('mouseleave', function () {
  const index = $(this).index();
  if (lastHoveredLi !== null && lastHoveredLi !== this) {
    $(lastHoveredLi).addClass('selet');
    stImgLi.eq($(lastHoveredLi).index()).addClass('selet');
  }
});

// 윈도우에서 마우스 이탈 시, 마지막으로 마우스 오버한 li 유지
$(window).on("mouseout", function(event) {
  const target = event.target;
  if (!$(target).closest('.st_txt_list').length && lastHoveredLi !== null && !$(lastHoveredLi).hasClass("selet")) {
    $(lastHoveredLi).addClass("selet");
    const index = stTxtLi.index(lastHoveredLi);
    stImgLi.eq(index).addClass("selet");
  }
});




/*
//이용약관
*/
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


