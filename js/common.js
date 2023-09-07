
//utility 버튼 클릭 이벤트 처리
$("#cart").on("click", function() {
  let cartDiv = $(".cart_list");
  let mypagePop = $(".mypage-pop");

  if (cartDiv.css("display") === "none") {
      cartDiv.css("display", "block");
      mypagePop.css("display", "none"); // 다른 컨텐츠 닫기
      $(".wrap::before").css("display", "block");
  } else {
      cartDiv.css("display", "none");
      $(".wrap::before").css("display", "none");
  }
});

$("#myinfor").on("click", function() {
  let cartDiv = $(".cart_list");
  let mypagePop = $(".mypage-pop");

  if (mypagePop.css("display") === "none") {
      mypagePop.css("display", "block");
      cartDiv.css("display", "none"); // 다른 컨텐츠 닫기
      $(".wrap::before").css("display", "block");
  } else {
      mypagePop.css("display", "none");
      $(".wrap::before").css("display", "none");
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
