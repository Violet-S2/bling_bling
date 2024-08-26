jQuery(document).ready(function(){
    /* 전체 카테고리 */
    const product = document.querySelector(".product");
    const g1 = document.querySelector(".g1"); 
    const g2 = document.querySelector(".g2"); 
    const g3 = document.querySelector(".g3"); 
    const g4 = document.querySelector(".g4");
    const earring = ["earring_1_1","earring_1_2","earring_1_3","earring_1_4","earring_1_5","earring_1_6","earring_1_7","earring_1_8"]
    const earring_name = ["더블 파이프 귀걸이 옐로우 골드","디자인 링 귀걸이 옐로우 골드","원터치 링 귀걸이 로즈 골드","세련된 링 귀걸이 로즈 골드","원터치 링 귀걸이 로즈 골드","로제도르 링 귀걸이 화이트 골드","후프 링 귀걸이 화이트 골드","3줄 작은 링 귀걸이 화이트 골드"]
    const earring_g1_text = ["PRODUCT NO.OTEP24601R<br>MATERIAL.BRASS<br>MADE.KOREA","PRODUCT NO.OTEP34602R<br>MATERIAL.BRASS<br>MADE.KOREA","PRODUCT NO.OTEP45603R<br>MATERIAL.BRASS<br>MADE.KOREA","PRODUCT NO.OTEP54604R<br>MATERIAL.BRASS<br>MADE.KOREA","PRODUCT NO.OTEP64305R<br>MATERIAL.BRASS<br>MADE.KOREA","PRODUCT NO.OTEP74806R<br>MATERIAL.BRASS<br>MADE.KOREA","PRODUCT NO.OTEP84607R<br>MATERIAL.BRASS<br>MADE.KOREA","PRODUCT NO.OTEP94608R<br>MATERIAL.BRASS<br>MADE.KOREA"]
    
    const g1_a = document.querySelector(".g1_a");
    const g2_a = document.querySelector(".g2_a");
    const g3_a = document.querySelector(".g3_a");
    const g4_a = document.querySelector(".g4_a");

    function Create_product_list(){
        for (let i = 0; i < earring.length; i++){
            product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
        }
        g4_a.style.background = "url(./images/product/icon/product_option_icon_4_hover.png) no-repeat center/cover";
    }

    $(".product_option_gold").on("change", function(){
        var gold_color = $(this).val();
        
        if(gold_color == "옐로우 골드"){
            const g1_on = g1.classList.contains('on');
            const g2_on = g2.classList.contains('on');
            const g3_on = g3.classList.contains('on');
            const g4_on = g4.classList.contains('on');
            if(g1_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < 2; i++){
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
                $(".g1_text").addClass("on");
            }else if(g2_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < 2; i++){
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g3_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < 2; i++){
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g4_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < 2; i++){
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else{
                product.innerHTML = ``;
                for (let i = 0; i < 2; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }
        }else if(gold_color == "로즈 골드"){
            const g1_on = g1.classList.contains('on');
            const g2_on = g2.classList.contains('on');
            const g3_on = g3.classList.contains('on');
            const g4_on = g4.classList.contains('on');
            if(g1_on == true){
                product.innerHTML = ``;
                for (let i = 2; i < 5; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
                $(".g1_text").addClass("on");
            }else if(g2_on == true){
                product.innerHTML = ``;
                for (let i = 2; i < 5; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g3_on == true){
                product.innerHTML = ``;
                for (let i = 2; i < 5; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g4_on == true){
                product.innerHTML = ``;
                for (let i = 2; i < 5; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else{
                product.innerHTML = ``;
                for (let i = 2; i < 5; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }
        }else if(gold_color == "실버 골드"){
            const g1_on = g1.classList.contains('on');
            const g2_on = g2.classList.contains('on');
            const g3_on = g3.classList.contains('on');
            const g4_on = g4.classList.contains('on');
            if(g1_on == true){
                product.innerHTML = ``;
                for (let i = 5; i < 8; i++){
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
                $(".g1_text").addClass("on");
            }else if(g2_on == true){
                product.innerHTML = ``;
                for (let i = 5; i < 8; i++){
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g3_on == true){
                product.innerHTML = ``;
                for (let i = 5; i < 8; i++){
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g4_on == true){
                product.innerHTML = ``;
                for (let i = 5; i < 8; i++){
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else{
                product.innerHTML = ``;
                for (let i = 5; i < 8; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }
        }else if(gold_color == "모든 색상"){
            const g1_on = g1.classList.contains('on');
            const g2_on = g2.classList.contains('on');
            const g3_on = g3.classList.contains('on');
            const g4_on = g4.classList.contains('on');
            if(g1_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
                $(".g1_text").addClass("on");
            }else if(g2_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g3_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g4_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else{
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }
        }else{
            const g1_on = g1.classList.contains('on');
            const g2_on = g2.classList.contains('on');
            const g3_on = g3.classList.contains('on');
            const g4_on = g4.classList.contains('on');
            if(g1_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
                $(".g1_text").addClass("on");
            }else if(g2_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g3_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g4_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else{
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>200,000원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }
        }
    });
    $(".g1").click(function(){
        //console.log("g1");
        g1_a.style.background = "url(./images/product/icon/product_option_icon_1_hover.png) no-repeat center/cover";
        g2_a.style.background = "url(./images/product/icon/product_option_icon_2.png) no-repeat center/cover";
        g3_a.style.background = "url(./images/product/icon/product_option_icon_3.png) no-repeat center/cover";
        g4_a.style.background = "url(./images/product/icon/product_option_icon_4.png) no-repeat center/cover";
        $(".g1").addClass("on");
        $(".g1_text").addClass("on");
        $(".g2").removeClass("on");
        $(".g3").removeClass("on");
        $(".g4").removeClass("on");
        $(".product_list").addClass("g1");
        $(".product_list").removeClass("g2");
        $(".product_list").removeClass("g3");
        $(".product_list").removeClass("g4");
        
    });
    $(".g2").click(function(){
        //console.log("g2");
        g1_a.style.background = "url(./images/product/icon/product_option_icon_1.png) no-repeat center/cover";
        g2_a.style.background = "url(./images/product/icon/product_option_icon_2_hover.png) no-repeat center/cover";
        g3_a.style.background = "url(./images/product/icon/product_option_icon_3.png) no-repeat center/cover";
        g4_a.style.background = "url(./images/product/icon/product_option_icon_4.png) no-repeat center/cover";
        $(".g2").addClass("on");
        $(".g1").removeClass("on");
        $(".g3").removeClass("on");
        $(".g4").removeClass("on");
        $(".g1_text").removeClass("on");
        $(".product_list").addClass("g2");
        $(".product_list").removeClass("g1");
        $(".product_list").removeClass("g3");
        $(".product_list").removeClass("g4");

    });
    $(".g3").click(function(){
        //console.log("g3");
        g1_a.style.background = "url(./images/product/icon/product_option_icon_1.png) no-repeat center/cover";
        g2_a.style.background = "url(./images/product/icon/product_option_icon_2.png) no-repeat center/cover";
        g3_a.style.background = "url(./images/product/icon/product_option_icon_3_hover.png) no-repeat center/cover";
        g4_a.style.background = "url(./images/product/icon/product_option_icon_4.png) no-repeat center/cover";
        $(".g3").addClass("on");
        $(".g1").removeClass("on");
        $(".g2").removeClass("on");
        $(".g4").removeClass("on");
        $(".g1_text").removeClass("on");
        $(".product_list").addClass("g3");
        $(".product_list").removeClass("g1");
        $(".product_list").removeClass("g2");
        $(".product_list").removeClass("g4");
    });
    $(".g4").click(function(){
        //console.log("g4");
        g1_a.style.background = "url(./images/product/icon/product_option_icon_1.png) no-repeat center/cover";
        g2_a.style.background = "url(./images/product/icon/product_option_icon_2.png) no-repeat center/cover";
        g3_a.style.background = "url(./images/product/icon/product_option_icon_3.png) no-repeat center/cover";
        g4_a.style.background = "url(./images/product/icon/product_option_icon_4_hover.png) no-repeat center/cover";
        $(".g4").addClass("on");
        $(".g1").removeClass("on");
        $(".g2").removeClass("on");
        $(".g3").removeClass("on");
        $(".g1_text").removeClass("on");
        $(".product_list").addClass("g4");
        $(".product_list").removeClass("g1");
        $(".product_list").removeClass("g2");
        $(".product_list").removeClass("g3");
    });

    Create_product_list();
});