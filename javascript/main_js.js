jQuery(document).ready(function(){
    /* 전체 카테고리 */
    
    let full_nav_text = document.getElementById('nav_text_btn');
    let full_nav_bak = document.getElementById('full_nav_bak');

    full_nav_text.addEventListener('click', function() {
    if (full_nav_bak.style.display == "block") {
        full_nav_bak.style.display = "none";
    } else {
        full_nav_bak.style.display = "block";
    }
    });
    
    /* 검색창에 있는 안내문을 지우고 나타냄 */
    $(function(){
        $('.nav_search').click(function(){
            $('.nav_search').addClass("click");
        });
        $('.search_remove').click(function(){
            $('.nav_search').removeClass("click");
        });
    });

    /* 서브메뉴 슬라이드 */
    $('.main_nav > li').mouseover(function(){
        $(this).find('a').addClass("hold");
        $(this).find('.sub_nav').stop().slideDown();
    }).mouseout(function(){
        $(this).find('a').removeClass("hold");
        $(this).find('.sub_nav').stop().slideUp(500);
    });

    /* 스크롤 감지 스크립트 */
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        /* nav_block 스크립트 */
        if( '0' < height &&  height  <'140'){
                $('.nav').css('position','relative');
                $('.nav').css('width','80%');
                $('.nav').css('top','0px');
                $('.nav_bak').css('width','0%');
                $('.main_nav > li > a').css('color','#000000');
        }
        if( '110' < height && height  <'2000'){
                $('.nav').css('position','fixed');
                $('.nav').css('width','56.5%');
                $('.nav').css('top','0px');
                $('.nav_bak').css('width','100%');
                //window.scrollTo({top:0, left:0, behavior : "smooth"});
        }
        /* content 이미지 스크롤 */
        /*
        if( '200' < height &&  height  <'210'){
            window.scrollTo({top:700, left:0, behavior : "smooth"});
            //window.scrollTo(0,700);
        }
        if( '770' < height &&  height  <'780'){
            window.scrollTo({top:1200, left:0, behavior : "smooth"});
            //window.scrollTo(0,1100);
        }
        if( '610' < height &&  height  <'620'){
            window.scrollTo({top:0, left:0, behavior : "smooth"});
        }
        if( '1070' < height &&  height  <'1080'){
            window.scrollTo({top:670, left:0, behavior : "smooth"});
            //$('.main_nav > li > a').css('color','#5da426');
        }
        if( '1201' < height &&  height  <'2000'){
            //$('.main_nav > li > a').css('color','#000000');
        }
        */
    });    
});