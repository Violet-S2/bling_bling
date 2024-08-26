jQuery(document).ready(function(){
    /* 전체 카테고리 */
    const product = document.querySelector(".product");
    const g3 = document.querySelector(".g3"); const g3_on = g3.classList.contains('on');
    const earring = ["earring_1_1","earring_1_2","earring_1_3","earring_1_4","earring_1_5","earring_1_6","earring_1_7","earring_1_8"]
    const earring_name = ["더블 파이프 귀걸이 옐로우 골드","디자인 링 귀걸이 옐로우 골드","원터치 링 귀걸이 로즈 골드","세련된 링 귀걸이 로즈 골드","원터치 링 귀걸이 로즈 골드","로제도르 링 귀걸이 화이트 골드","후프 링 귀걸이 화이트 골드","3줄 작은 링 귀걸이 화이트 골드"]
    
    const g1_a = document.querySelector(".g1_a");
    const g2_a = document.querySelector(".g2_a");
    const g3_a = document.querySelector(".g3_a");
    const g4_a = document.querySelector(".g4_a");

    function Create_product_list(){
        for (let i = 0; i < earring.length; i++){
            product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span></a></li>`;
        }
        g4_a.style.background = "url(./images/product/icon/product_option_icon_4_hover.png) no-repeat center/cover";
    }

    $(".product_option_gold").on("change", function(){
        var gold_color = $(this).val();
        
        if(gold_color == "옐로우 골드"){
            product.innerHTML = ``;
            for (let i = 0; i < 2; i++){
                product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span></a></li>`;
            }
        }else if(gold_color == "로즈 골드"){
            const g3_on = g3.classList.contains('on');
            console.log(g3_on);
            
            if(g3_on == true){
                product.innerHTML = ``;
                for (let i = 2; i < 5; i++){
                    console.log(earring[i]);
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span></a></li>`;
                }
            }
            //product.innerHTML = ``;
            //for (let i = 2; i < 5; i++){
                //console.log(earring[i]);
            //    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span></a></li>`;
            //}
        }else if(gold_color == "실버 골드"){
            product.innerHTML = ``;
            for (let i = 5; i < 8; i++){
                product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span></a></li>`;
            }
        }else{
            product.innerHTML = ``;
            for (let i = 0; i < earring.length; i++){
                product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span></a></li>`;
            }
        }
    });
    $(".g1").click(function(){
        console.log("g1");
        g1_a.style.background = "url(./images/product/icon/product_option_icon_1_hover.png) no-repeat center/cover";
        g2_a.style.background = "url(./images/product/icon/product_option_icon_2.png) no-repeat center/cover";
        g3_a.style.background = "url(./images/product/icon/product_option_icon_3.png) no-repeat center/cover";
        g4_a.style.background = "url(./images/product/icon/product_option_icon_4.png) no-repeat center/cover";
        
    });
    $(".g2").click(function(){
        console.log("g2");
        g1_a.style.background = "url(./images/product/icon/product_option_icon_1.png) no-repeat center/cover";
        g2_a.style.background = "url(./images/product/icon/product_option_icon_2_hover.png) no-repeat center/cover";
        g3_a.style.background = "url(./images/product/icon/product_option_icon_3.png) no-repeat center/cover";
        g4_a.style.background = "url(./images/product/icon/product_option_icon_4.png) no-repeat center/cover";

    });
    $(".g3").click(function(){
        console.log("g3");
        g1_a.style.background = "url(./images/product/icon/product_option_icon_1.png) no-repeat center/cover";
        g2_a.style.background = "url(./images/product/icon/product_option_icon_2.png) no-repeat center/cover";
        g3_a.style.background = "url(./images/product/icon/product_option_icon_3_hover.png) no-repeat center/cover";
        g4_a.style.background = "url(./images/product/icon/product_option_icon_4.png) no-repeat center/cover";
        $(".g3").addClass("on");
        $(".product_list").addClass("g3");
        $(".product_list").removeClass("g1");
        $(".product_list").removeClass("g2");
        $(".product_list").removeClass("g4");
    });
    $(".g4").click(function(){
        console.log("g4");
        g1_a.style.background = "url(./images/product/icon/product_option_icon_1.png) no-repeat center/cover";
        g2_a.style.background = "url(./images/product/icon/product_option_icon_2.png) no-repeat center/cover";
        g3_a.style.background = "url(./images/product/icon/product_option_icon_3.png) no-repeat center/cover";
        g4_a.style.background = "url(./images/product/icon/product_option_icon_4_hover.png) no-repeat center/cover";

    });

    Create_product_list();
});