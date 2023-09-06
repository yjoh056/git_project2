
// 버튼 클릭 이벤트 처리
document.getElementById("cart").addEventListener("click", function () {
    var cartDiv = document.querySelector(".cart_list");
    if(cartDiv.style.display="none"){
        cartDiv.style.display="block";
    }else{
        cartDiv.style.display="none";
    }
});


/***
 * 
 * slide
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
