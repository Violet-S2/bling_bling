jQuery(document).ready(function(){
    /* 유효성 검사 */
    const add_text_1 = document.getElementById('add_text_1');
    const add_text_2 = document.getElementById('add_text_2');
    const add_text_3 = document.getElementById('add_text_3');
    const add_text_4 = document.getElementById('add_text_4');
    const add_text_5 = document.getElementById('add_text_5');

    $("#create_account_btn").click(function(){
        

        var create_id_value = $("#create_id").val();
        var create_password_value = $("#create_password").val();
        var password_check_value = $("#password_check").val();
        var create_name_value = $("#create_name").val();
        var create_date_value = $("#create_date").val();
        var create_gender_r_value = $("input:radio[name='gender_r']").is(":checked");

        var id_check = /^(?=.*[a-zA-Z0-9]).{5,30}$/;
        var password_check = /^[A-Za-z]{1}(?=.*[a-zA-Z0-9#?!@$^&*-]).{8,200}$/;
        var spec_check = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

        if(!id_check.test(create_id_value) || spec_check.test(create_id_value)){
            add_text_1.style.display = "block"
            return false;
        }
        if(!password_check.test(create_password_value)){
            add_text_1.style.display = "none"
            add_text_2.style.display = "block"
            return false;
        }
        if(create_password_value != password_check_value){
            add_text_1.style.display = "none"
            add_text_2.style.display = "none"
            add_text_3.style.display = "block"
            return false;
        }
        if(create_name_value == ""){
            add_text_1.style.display = "none"
            add_text_2.style.display = "none"
            add_text_3.style.display = "none"
            $("#create_name").addClass("on");
            return false;
        }
        if(create_date_value == ""){
            add_text_1.style.display = "none"
            add_text_2.style.display = "none"
            add_text_3.style.display = "none"
            add_text_4.style.display = "block"
            $("#create_name").removeClass("on");
            $("#create_date").addClass("on");
            return false;
        }
        if(create_gender_r_value != true){
            add_text_1.style.display = "none"
            add_text_2.style.display = "none"
            add_text_3.style.display = "none"
            add_text_4.style.display = "none"
            add_text_5.style.display = "block"
            $("#create_name").removeClass("on");
            $("#create_date").removeClass("on");
            return false;
        }else{
            add_text_1.style.display = "none"
            add_text_2.style.display = "none"
            add_text_3.style.display = "none"
            add_text_4.style.display = "none"
            add_text_5.style.display = "none"
            $("#create_name").removeClass("on");
            $("#create_date").removeClass("on");
            return true
        }
       
        /*
        create_id.addEventListener('input', function(){
            if(value == ""){
                create_id.parentElement.innerHTML("<p>아이디를 입력해주세요.</p>")
                return false;
            }
        });
        */

    });
    
});