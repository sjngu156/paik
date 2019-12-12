/* slider.js */

$(function(){
    var count = 1; // 이미지 번호 
    
    // 인터벌 함수
    setInterval(function(){
        if(count > 1) count = 0;
        // 모든 이미지 비표시
        $('.slider1').removeClass('show');
        // 현재 이미지만 표시
        $('.slider1')
            .eq(count)
            .addClass('show');
        count++;
    }, 7000);
});

$(function(){
    var count = 1; // 이미지 번호 
    
    // 인터벌 함수
    setInterval(function(){
        if(count > 1) count = 0;
        // 모든 이미지 비표시
        $('.slider2').removeClass('show');
        // 현재 이미지만 표시
        $('.slider2')
            .eq(count)
            .addClass('show');

        count++;
    }, 7000);
});