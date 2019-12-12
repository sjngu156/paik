/* main.js */
console.log('jquery');

$(function(){
    // 마우스 오버시 메뉴 열림
    $('.hover').mouseover(function(){
        // class추가되면 보임
        $('.depth2').addClass('show');
    });

    // 마우스가 나가면 메뉴 닫힘
    $('.hover').mouseout(function(){
        // class 삭제
        $('.depth2').removeClass('show');
    });
});