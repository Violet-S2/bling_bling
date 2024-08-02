jQuery(document).ready(function(){
    /* 유효성 검사 */
    const check_1 = document.getElementById('check_1');
    const check_2 = document.getElementById('check_2');
    const check_3 = document.getElementById('check_3');
    const errtext = document.getElementById('errtext');

    check_1.addEventListener('click', function(){
        console.log("3");
        if(check_1.checked == true){
            //console.log("1");
            check_2.checked = true;
            check_3.checked = true;
        }else{
            //console.log("2");
            check_2.checked = false;
            check_3.checked = false;
        }
    });
    

    $("#create_next_btn").click(function(){
        if(check_2.checked != true){
            //console.log("btn");
            errtext.style.display = "block";
            return false;
        }else{
            errtext.style.display = "none";
            return true;
        }
    });
    
});