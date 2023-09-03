// 웹 서버에서 Cache-Control 헤더 설정
// 이미지 파일은 1주일 동안 캐시되도록 설정
// CSS 파일은 1년 동안 캐시되도록 설정

// 이미지 파일 응답 헤더
Cache-Control: max-age=604800;

// CSS 파일 응답 헤더
Cache-Control: max-age;=31536000;


// 
/* */
const tabBtn = $('.tab_title li');
const panels = $('tab_slider>div');
tabBtn.on('click', function (e) {
    e.preventDefault();
    let tg = $(this).index();
    panels.hide();
    tabBtn.removeClass('on')
    panels.eq(tg).show();
    tabBtn.eq(tg).addClass('on');

    panels.hide();
    panels.eq(tg).show();
});

