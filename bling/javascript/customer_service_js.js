jQuery(document).ready(function(){
    /* 자주 묻는 질문 스크립트 */
    const faq_title = document.getElementsByClassName("faq_title");
    
    $('.faq_title').click(function(event){
        event.preventDefault();
            
        if(this.style.color == "rgb(175, 188, 53)"){
            $(this).find('.faq_text').slideUp(500);
            $(this).find('.faq_title_icon').removeClass('on');
            this.style.color = "#000000"
            const faq_title_on = this.classList.contains('on');
            if(faq_title_on == false){
                $(this).find('.faq_text').slideDown(500);
                $(this).find('.faq_title_icon').addClass('on');
                $(this).addClass('on');
                this.style.color = "#afbc35"
                $(this).siblings().find('.faq_text').slideUp(500);
                $(this).siblings().find('.faq_title_icon.on').removeClass("on");
                $(this).siblings().removeClass("on");
            }
            return false
        }
        if(faq_title[6].style.display != "none" || this.style.color == "rgb(175, 188, 53)" || this.style.color == "rgb(0, 0, 0)"){
            $(this).find('.faq_text').slideDown(500);
            $(this).find('.faq_title_icon').addClass('on');
            $(this).addClass('on');
            this.style.color = "#afbc35"
            $(this).siblings().find('.faq_text').slideUp(500);
            $(this).siblings().find('.faq_title_icon.on').removeClass("on");
            $(this).siblings().removeClass("on");
        }
    });

    /* icon 버튼 스크립트 */
    $('#service_tel_btn').click(function(event){
        event.preventDefault();
        window.scrollTo({top:500, left:0, behavior : "smooth"});
    });
    $('#service_message_btn').click(function(event){
        event.preventDefault();
        window.scrollTo({top:700, left:0, behavior : "smooth"});
    });
    $('#service_faq_btn').click(function(event){
        event.preventDefault();
        window.scrollTo({top:920, left:0, behavior : "smooth"});
    });
   
});