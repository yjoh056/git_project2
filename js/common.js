
/***
 * 
 * slide
* ** */
const slides = $('.slid_wrap li');
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

// 버튼 클릭 이벤트 처리
document.getElementById("cart").addEventListener("click", function () {
    var cartDiv = document.querySelector(".cart_list");
    if(cartDiv.style.display="none"){
        cartDiv.style.display="block";
    }else{
        cartDiv.style.display="none";
    }
});
