const depth1 = document.querySelector('.dept1 li');
depth1.addEventListener('mouseover', function () {
    depth1.querySelectorAll('.dept2').forEach((o) => { o.style.display = 'block' }) /* textMenu */
})
// hoverOn
depth1.addEventListener('mouseout', function () {
    depth1.querySelectorAll('.dept2').forEach((o) => { o.style.display = 'none' }) /* textMenu */

})
// hoverOff

// 버튼 클릭 이벤트 처리
document.getElementById("cart").addEventListener("click", function () {
    var cartDiv = document.querySelector(".cart_list");
    if(cartDiv.style.display="none"){
        cartDiv.style.display="block";
    }else{
        cartDiv.style.display="none";
    }
});
