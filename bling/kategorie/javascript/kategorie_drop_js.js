jQuery(document).ready(function(){
    /* 카테고리-링 스크립트 */
    const product = document.querySelector(".product");
    const g1 = document.querySelector(".g1"); 
    const g2 = document.querySelector(".g2"); 
    const g3 = document.querySelector(".g3"); 
    const g4 = document.querySelector(".g4");

    const g1_a = document.querySelector(".g1_a");
    const g2_a = document.querySelector(".g2_a");
    const g3_a = document.querySelector(".g3_a");
    const g4_a = document.querySelector(".g4_a");

    const earring = ["earring_2_1","earring_2_2","earring_2_3","earring_2_4","earring_2_5","earring_2_6","earring_2_7","earring_2_8","earring_2_9","earring_2_10"]
    const earring_price = ["300,000","320,000","560,000","280,000","310,000","280,000","270,000","360,000","260,000","320,000"]
    const earring_name = ["메리골드L 귀걸이 옐로우 골드","선샤인 귀걸이 옐로우 골드","구찌 - 드롭 귀걸이 옐로우 골드","크리스탈 드롭 귀걸이 로즈 골드","플래팅 드롭 귀걸이 로즈 골드","새벽달 핑크스톤 로즈 골드","다이아 귀걸이 화이트 골드","다이아몬드 귀걸이 화이트 골드","나비 체인 귀걸이 화이트 골드","선샤인 귀걸이 화이트 골드"]
    const earring_g1_text = ["PRODUCT NO.OTEP35601R<br>MATERIAL.GOLD 18K<br>MADE.KOREA","PRODUCT NO.OTEP45602R<br>MATERIAL.GOLD 18K<br>MADE.KOREA","PRODUCT NO.OTEP56803R<br>MATERIAL.GOLD 24K<br>MADE.KOREA","PRODUCT NO.OTEP65604R<br>MATERIAL.GOLD 14K<br>MADE.KOREA","PRODUCT NO.OTEP75302R<br>MATERIAL.GOLD 18K<br>MADE.KOREA","PRODUCT NO.OTEP85806R<br>MATERIAL.GOLD 14K<br>MADE.KOREA","PRODUCT NO.OTEP95607R<br>MATERIAL.GOLD 14K<br>MADE.KOREA","PRODUCT NO.OTEP34618R<br>MATERIAL.GOLD 18K<br>MADE.KOREA","PRODUCT NO.OTEP72618R<br>MATERIAL.GOLD 14K<br>MADE.KOREA","PRODUCT NO.OTEP86713R<br>MATERIAL.GOLD 18K<br>MADE.KOREA"]
    
    const earring_UP = ["earring_2_1","earring_2_2","earring_2_3","earring_2_4","earring_2_5","earring_2_6","earring_2_7","earring_2_8","earring_2_9","earring_2_10"]
    const earring_price_UP = ["300,000","320,000","560,000","280,000","310,000","280,000","270,000","360,000","260,000","320,000"]
    const earring_name_UP = ["메리골드L 귀걸이 옐로우 골드","선샤인 귀걸이 옐로우 골드","구찌 - 드롭 귀걸이 옐로우 골드","크리스탈 드롭 귀걸이 로즈 골드","플래팅 드롭 귀걸이 로즈 골드","새벽달 핑크스톤 로즈 골드","다이아 귀걸이 화이트 골드","다이아몬드 귀걸이 화이트 골드","나비 체인 귀걸이 화이트 골드","선샤인 귀걸이 화이트 골드"]
    const earring_g1_text_UP = ["PRODUCT NO.OTEP35601R<br>MATERIAL.GOLD 18K<br>MADE.KOREA","PRODUCT NO.OTEP45602R<br>MATERIAL.GOLD 18K<br>MADE.KOREA","PRODUCT NO.OTEP56803R<br>MATERIAL.GOLD 24K<br>MADE.KOREA","PRODUCT NO.OTEP65604R<br>MATERIAL.GOLD 14K<br>MADE.KOREA","PRODUCT NO.OTEP75302R<br>MATERIAL.GOLD 18K<br>MADE.KOREA","PRODUCT NO.OTEP85806R<br>MATERIAL.GOLD 14K<br>MADE.KOREA","PRODUCT NO.OTEP95607R<br>MATERIAL.GOLD 14K<br>MADE.KOREA","PRODUCT NO.OTEP34618R<br>MATERIAL.GOLD 18K<br>MADE.KOREA","PRODUCT NO.OTEP72618R<br>MATERIAL.GOLD 14K<br>MADE.KOREA","PRODUCT NO.OTEP86713R<br>MATERIAL.GOLD 18K<br>MADE.KOREA"]
    let earring_tmp;
    for(let p = 0; p < earring_price_UP.length-1; p++){
        for(let v = p+1; v < earring_price_UP.length; v++){
            if(earring_price_UP[v] > earring_price_UP[p]){
                earring_tmp = earring_price_UP[v];
                earring_price_UP[v] = earring_price_UP[p];
                earring_price_UP[p] = earring_tmp;
                earring_tmp = earring_UP[v];
                earring_UP[v] = earring_UP[p];
                earring_UP[p] = earring_tmp;
                earring_tmp = earring_name_UP[v];
                earring_name_UP[v] = earring_name_UP[p];
                earring_name_UP[p] = earring_tmp;
                earring_tmp = earring_g1_text_UP[v];
                earring_g1_text_UP[v] = earring_g1_text_UP[p];
                earring_g1_text_UP[p] = earring_tmp;
            }
        }
    }

    function Create_product_list(){
        for (let i = 0; i < earring.length; i++){
            product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
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
                for (let i = 0; i < 3; i++){
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
                $(".g1_text").addClass("on");
            }else if(g2_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < 3; i++){
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g3_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < 3; i++){
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g4_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < 3; i++){
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else{
                product.innerHTML = ``;
                for (let i = 0; i < 3; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }
            $(".product_option_list:nth-child(1)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < 3; i++){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < 3; i++){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < 3; i++){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < 3; i++){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 0; i < 3; i++){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
            });
            $(".product_option_list:nth-child(2)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 2; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 2; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 2; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 2; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 2; 0 <= i; i--){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
            });
            $(".product_option_list:nth-child(3)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < 3; i++){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < 3; i++){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < 3; i++){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < 3; i++){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 0; i < 3; i++){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
            });
            $(".product_option_list:nth-child(4)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 2; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 2; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 2; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 2; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 2; 0 <= i; i--){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
            });
        }else if(gold_color == "로즈 골드"){
            const g1_on = g1.classList.contains('on');
            const g2_on = g2.classList.contains('on');
            const g3_on = g3.classList.contains('on');
            const g4_on = g4.classList.contains('on');
            if(g1_on == true){
                product.innerHTML = ``;
                for (let i = 3; i < 6; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
                $(".g1_text").addClass("on");
            }else if(g2_on == true){
                product.innerHTML = ``;
                for (let i = 3; i < 6; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g3_on == true){
                product.innerHTML = ``;
                for (let i = 3; i < 6; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g4_on == true){
                product.innerHTML = ``;
                for (let i = 3; i < 6; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else{
                product.innerHTML = ``;
                for (let i = 3; i < 6; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }
            $(".product_option_list:nth-child(1)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 3; i < 6; i++){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 3; i < 6; i++){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 3; i < 6; i++){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 3; i < 6; i++){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 3; i < 6; i++){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
            });
            $(".product_option_list:nth-child(2)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[4] + `.jfif" alt="` + earring_UP[4] + `"><p>` + earring_name_UP[4] + `</p><span>` + earring_price_UP[4] + `원</span><p class="g1_text">`+ earring_g1_text_UP[4] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[6] + `.jfif" alt="` + earring_UP[6] + `"><p>` + earring_name_UP[6] + `</p><span>` + earring_price_UP[6] + `원</span><p class="g1_text">`+ earring_g1_text_UP[6] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[7] + `.jfif" alt="` + earring_UP[7] + `"><p>` + earring_name_UP[7] + `</p><span>` + earring_price_UP[7] + `원</span><p class="g1_text">`+ earring_g1_text_UP[7] +`</p></a></li>`;
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[4] + `.jfif" alt="` + earring_UP[4] + `"><p>` + earring_name_UP[4] + `</p><span>` + earring_price_UP[4] + `원</span><p class="g1_text">`+ earring_g1_text_UP[4] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[6] + `.jfif" alt="` + earring_UP[6] + `"><p>` + earring_name_UP[6] + `</p><span>` + earring_price_UP[6] + `원</span><p class="g1_text">`+ earring_g1_text_UP[6] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[7] + `.jfif" alt="` + earring_UP[7] + `"><p>` + earring_name_UP[7] + `</p><span>` + earring_price_UP[7] + `원</span><p class="g1_text">`+ earring_g1_text_UP[7] +`</p></a></li>`;
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[4] + `.jfif" alt="` + earring_UP[4] + `"><p>` + earring_name_UP[4] + `</p><span>` + earring_price_UP[4] + `원</span><p class="g1_text">`+ earring_g1_text_UP[4] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[6] + `.jfif" alt="` + earring_UP[6] + `"><p>` + earring_name_UP[6] + `</p><span>` + earring_price_UP[6] + `원</span><p class="g1_text">`+ earring_g1_text_UP[6] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[7] + `.jfif" alt="` + earring_UP[7] + `"><p>` + earring_name_UP[7] + `</p><span>` + earring_price_UP[7] + `원</span><p class="g1_text">`+ earring_g1_text_UP[7] +`</p></a></li>`;
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[4] + `.jfif" alt="` + earring_UP[4] + `"><p>` + earring_name_UP[4] + `</p><span>` + earring_price_UP[4] + `원</span><p class="g1_text">`+ earring_g1_text_UP[4] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[6] + `.jfif" alt="` + earring_UP[6] + `"><p>` + earring_name_UP[6] + `</p><span>` + earring_price_UP[6] + `원</span><p class="g1_text">`+ earring_g1_text_UP[6] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[7] + `.jfif" alt="` + earring_UP[7] + `"><p>` + earring_name_UP[7] + `</p><span>` + earring_price_UP[7] + `원</span><p class="g1_text">`+ earring_g1_text_UP[7] +`</p></a></li>`;
                }else{
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[4] + `.jfif" alt="` + earring_UP[4] + `"><p>` + earring_name_UP[4] + `</p><span>` + earring_price_UP[4] + `원</span><p class="g1_text">`+ earring_g1_text_UP[4] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[6] + `.jfif" alt="` + earring_UP[6] + `"><p>` + earring_name_UP[6] + `</p><span>` + earring_price_UP[6] + `원</span><p class="g1_text">`+ earring_g1_text_UP[6] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[7] + `.jfif" alt="` + earring_UP[7] + `"><p>` + earring_name_UP[7] + `</p><span>` + earring_price_UP[7] + `원</span><p class="g1_text">`+ earring_g1_text_UP[7] +`</p></a></li>`;
                }
            });
            $(".product_option_list:nth-child(3)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[7] + `.jfif" alt="` + earring_UP[7] + `"><p>` + earring_name_UP[7] + `</p><span>` + earring_price_UP[7] + `원</span><p class="g1_text">`+ earring_g1_text_UP[7] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[6] + `.jfif" alt="` + earring_UP[6] + `"><p>` + earring_name_UP[6] + `</p><span>` + earring_price_UP[6] + `원</span><p class="g1_text">`+ earring_g1_text_UP[6] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[4] + `.jfif" alt="` + earring_UP[4] + `"><p>` + earring_name_UP[4] + `</p><span>` + earring_price_UP[4] + `원</span><p class="g1_text">`+ earring_g1_text_UP[4] +`</p></a></li>`;
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[7] + `.jfif" alt="` + earring_UP[7] + `"><p>` + earring_name_UP[7] + `</p><span>` + earring_price_UP[7] + `원</span><p class="g1_text">`+ earring_g1_text_UP[7] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[6] + `.jfif" alt="` + earring_UP[6] + `"><p>` + earring_name_UP[6] + `</p><span>` + earring_price_UP[6] + `원</span><p class="g1_text">`+ earring_g1_text_UP[6] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[4] + `.jfif" alt="` + earring_UP[4] + `"><p>` + earring_name_UP[4] + `</p><span>` + earring_price_UP[4] + `원</span><p class="g1_text">`+ earring_g1_text_UP[4] +`</p></a></li>`;
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[7] + `.jfif" alt="` + earring_UP[7] + `"><p>` + earring_name_UP[7] + `</p><span>` + earring_price_UP[7] + `원</span><p class="g1_text">`+ earring_g1_text_UP[7] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[6] + `.jfif" alt="` + earring_UP[6] + `"><p>` + earring_name_UP[6] + `</p><span>` + earring_price_UP[6] + `원</span><p class="g1_text">`+ earring_g1_text_UP[6] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[4] + `.jfif" alt="` + earring_UP[4] + `"><p>` + earring_name_UP[4] + `</p><span>` + earring_price_UP[4] + `원</span><p class="g1_text">`+ earring_g1_text_UP[4] +`</p></a></li>`;
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[7] + `.jfif" alt="` + earring_UP[7] + `"><p>` + earring_name_UP[7] + `</p><span>` + earring_price_UP[7] + `원</span><p class="g1_text">`+ earring_g1_text_UP[7] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[6] + `.jfif" alt="` + earring_UP[6] + `"><p>` + earring_name_UP[6] + `</p><span>` + earring_price_UP[6] + `원</span><p class="g1_text">`+ earring_g1_text_UP[6] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[4] + `.jfif" alt="` + earring_UP[4] + `"><p>` + earring_name_UP[4] + `</p><span>` + earring_price_UP[4] + `원</span><p class="g1_text">`+ earring_g1_text_UP[4] +`</p></a></li>`;
                }else{
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[7] + `.jfif" alt="` + earring_UP[7] + `"><p>` + earring_name_UP[7] + `</p><span>` + earring_price_UP[7] + `원</span><p class="g1_text">`+ earring_g1_text_UP[7] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[6] + `.jfif" alt="` + earring_UP[6] + `"><p>` + earring_name_UP[6] + `</p><span>` + earring_price_UP[6] + `원</span><p class="g1_text">`+ earring_g1_text_UP[6] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[4] + `.jfif" alt="` + earring_UP[4] + `"><p>` + earring_name_UP[4] + `</p><span>` + earring_price_UP[4] + `원</span><p class="g1_text">`+ earring_g1_text_UP[4] +`</p></a></li>`;
                }
            });
            $(".product_option_list:nth-child(4)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 5; 3 <= i; i--){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 5; 3 <= i; i--){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 5; 3 <= i; i--){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 5; 3 <= i; i--){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 5; 3 <= i; i--){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
            });
        }else if(gold_color == "실버 골드"){
            const g1_on = g1.classList.contains('on');
            const g2_on = g2.classList.contains('on');
            const g3_on = g3.classList.contains('on');
            const g4_on = g4.classList.contains('on');
            if(g1_on == true){
                product.innerHTML = ``;
                for (let i = 6; i < 10; i++){
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
                $(".g1_text").addClass("on");
            }else if(g2_on == true){
                product.innerHTML = ``;
                for (let i = 6; i < 10; i++){
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g3_on == true){
                product.innerHTML = ``;
                for (let i = 6; i < 10; i++){
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g4_on == true){
                product.innerHTML = ``;
                for (let i = 6; i < 10; i++){
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else{
                product.innerHTML = ``;
                for (let i = 6; i < 10; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }
            $(".product_option_list:nth-child(1)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 6; i < 10; i++){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 6; i < 10; i++){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 6; i < 10; i++){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 6; i < 10; i++){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 6; i < 10; i++){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
            });
            $(".product_option_list:nth-child(2)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[1] + `.jfif" alt="` + earring_UP[1] + `"><p>` + earring_name_UP[1] + `</p><span>` + earring_price_UP[1] + `원</span><p class="g1_text">`+ earring_g1_text_UP[1] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[3] + `.jfif" alt="` + earring_UP[3] + `"><p>` + earring_name_UP[3] + `</p><span>` + earring_price_UP[3] + `원</span><p class="g1_text">`+ earring_g1_text_UP[3] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[8] + `.jfif" alt="` + earring_UP[8] + `"><p>` + earring_name_UP[8] + `</p><span>` + earring_price_UP[8] + `원</span><p class="g1_text">`+ earring_g1_text_UP[8] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[9] + `.jfif" alt="` + earring_UP[9] + `"><p>` + earring_name_UP[9] + `</p><span>` + earring_price_UP[9] + `원</span><p class="g1_text">`+ earring_g1_text_UP[9] +`</p></a></li>`;
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[1] + `.jfif" alt="` + earring_UP[1] + `"><p>` + earring_name_UP[1] + `</p><span>` + earring_price_UP[1] + `원</span><p class="g1_text">`+ earring_g1_text_UP[1] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[3] + `.jfif" alt="` + earring_UP[3] + `"><p>` + earring_name_UP[3] + `</p><span>` + earring_price_UP[3] + `원</span><p class="g1_text">`+ earring_g1_text_UP[3] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[8] + `.jfif" alt="` + earring_UP[8] + `"><p>` + earring_name_UP[8] + `</p><span>` + earring_price_UP[8] + `원</span><p class="g1_text">`+ earring_g1_text_UP[8] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[9] + `.jfif" alt="` + earring_UP[9] + `"><p>` + earring_name_UP[9] + `</p><span>` + earring_price_UP[9] + `원</span><p class="g1_text">`+ earring_g1_text_UP[9] +`</p></a></li>`;
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[1] + `.jfif" alt="` + earring_UP[1] + `"><p>` + earring_name_UP[1] + `</p><span>` + earring_price_UP[1] + `원</span><p class="g1_text">`+ earring_g1_text_UP[1] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[3] + `.jfif" alt="` + earring_UP[3] + `"><p>` + earring_name_UP[3] + `</p><span>` + earring_price_UP[3] + `원</span><p class="g1_text">`+ earring_g1_text_UP[3] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[8] + `.jfif" alt="` + earring_UP[8] + `"><p>` + earring_name_UP[8] + `</p><span>` + earring_price_UP[8] + `원</span><p class="g1_text">`+ earring_g1_text_UP[8] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[9] + `.jfif" alt="` + earring_UP[9] + `"><p>` + earring_name_UP[9] + `</p><span>` + earring_price_UP[9] + `원</span><p class="g1_text">`+ earring_g1_text_UP[9] +`</p></a></li>`;
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[1] + `.jfif" alt="` + earring_UP[1] + `"><p>` + earring_name_UP[1] + `</p><span>` + earring_price_UP[1] + `원</span><p class="g1_text">`+ earring_g1_text_UP[1] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[3] + `.jfif" alt="` + earring_UP[3] + `"><p>` + earring_name_UP[3] + `</p><span>` + earring_price_UP[3] + `원</span><p class="g1_text">`+ earring_g1_text_UP[3] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[8] + `.jfif" alt="` + earring_UP[8] + `"><p>` + earring_name_UP[8] + `</p><span>` + earring_price_UP[8] + `원</span><p class="g1_text">`+ earring_g1_text_UP[8] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[9] + `.jfif" alt="` + earring_UP[9] + `"><p>` + earring_name_UP[9] + `</p><span>` + earring_price_UP[9] + `원</span><p class="g1_text">`+ earring_g1_text_UP[9] +`</p></a></li>`;
                }else{
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[1] + `.jfif" alt="` + earring_UP[1] + `"><p>` + earring_name_UP[1] + `</p><span>` + earring_price_UP[1] + `원</span><p class="g1_text">`+ earring_g1_text_UP[1] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[3] + `.jfif" alt="` + earring_UP[3] + `"><p>` + earring_name_UP[3] + `</p><span>` + earring_price_UP[3] + `원</span><p class="g1_text">`+ earring_g1_text_UP[3] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[8] + `.jfif" alt="` + earring_UP[8] + `"><p>` + earring_name_UP[8] + `</p><span>` + earring_price_UP[8] + `원</span><p class="g1_text">`+ earring_g1_text_UP[8] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[9] + `.jfif" alt="` + earring_UP[9] + `"><p>` + earring_name_UP[9] + `</p><span>` + earring_price_UP[9] + `원</span><p class="g1_text">`+ earring_g1_text_UP[9] +`</p></a></li>`;
                }
            });
            $(".product_option_list:nth-child(3)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[9] + `.jfif" alt="` + earring_UP[9] + `"><p>` + earring_name_UP[9] + `</p><span>` + earring_price_UP[9] + `원</span><p class="g1_text">`+ earring_g1_text_UP[9] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[8] + `.jfif" alt="` + earring_UP[8] + `"><p>` + earring_name_UP[8] + `</p><span>` + earring_price_UP[8] + `원</span><p class="g1_text">`+ earring_g1_text_UP[8] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[3] + `.jfif" alt="` + earring_UP[3] + `"><p>` + earring_name_UP[3] + `</p><span>` + earring_price_UP[3] + `원</span><p class="g1_text">`+ earring_g1_text_UP[3] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[1] + `.jfif" alt="` + earring_UP[1] + `"><p>` + earring_name_UP[1] + `</p><span>` + earring_price_UP[1] + `원</span><p class="g1_text">`+ earring_g1_text_UP[1] +`</p></a></li>`;
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[9] + `.jfif" alt="` + earring_UP[9] + `"><p>` + earring_name_UP[9] + `</p><span>` + earring_price_UP[9] + `원</span><p class="g1_text">`+ earring_g1_text_UP[9] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[8] + `.jfif" alt="` + earring_UP[8] + `"><p>` + earring_name_UP[8] + `</p><span>` + earring_price_UP[8] + `원</span><p class="g1_text">`+ earring_g1_text_UP[8] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[3] + `.jfif" alt="` + earring_UP[3] + `"><p>` + earring_name_UP[3] + `</p><span>` + earring_price_UP[3] + `원</span><p class="g1_text">`+ earring_g1_text_UP[3] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[1] + `.jfif" alt="` + earring_UP[1] + `"><p>` + earring_name_UP[1] + `</p><span>` + earring_price_UP[1] + `원</span><p class="g1_text">`+ earring_g1_text_UP[1] +`</p></a></li>`;
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[9] + `.jfif" alt="` + earring_UP[9] + `"><p>` + earring_name_UP[9] + `</p><span>` + earring_price_UP[9] + `원</span><p class="g1_text">`+ earring_g1_text_UP[9] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[8] + `.jfif" alt="` + earring_UP[8] + `"><p>` + earring_name_UP[8] + `</p><span>` + earring_price_UP[8] + `원</span><p class="g1_text">`+ earring_g1_text_UP[8] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[3] + `.jfif" alt="` + earring_UP[3] + `"><p>` + earring_name_UP[3] + `</p><span>` + earring_price_UP[3] + `원</span><p class="g1_text">`+ earring_g1_text_UP[3] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[1] + `.jfif" alt="` + earring_UP[1] + `"><p>` + earring_name_UP[1] + `</p><span>` + earring_price_UP[1] + `원</span><p class="g1_text">`+ earring_g1_text_UP[1] +`</p></a></li>`;
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[9] + `.jfif" alt="` + earring_UP[9] + `"><p>` + earring_name_UP[9] + `</p><span>` + earring_price_UP[9] + `원</span><p class="g1_text">`+ earring_g1_text_UP[9] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[8] + `.jfif" alt="` + earring_UP[8] + `"><p>` + earring_name_UP[8] + `</p><span>` + earring_price_UP[8] + `원</span><p class="g1_text">`+ earring_g1_text_UP[8] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[3] + `.jfif" alt="` + earring_UP[3] + `"><p>` + earring_name_UP[3] + `</p><span>` + earring_price_UP[3] + `원</span><p class="g1_text">`+ earring_g1_text_UP[3] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[1] + `.jfif" alt="` + earring_UP[1] + `"><p>` + earring_name_UP[1] + `</p><span>` + earring_price_UP[1] + `원</span><p class="g1_text">`+ earring_g1_text_UP[1] +`</p></a></li>`;
                }else{
                    product.innerHTML = ``;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[9] + `.jfif" alt="` + earring_UP[9] + `"><p>` + earring_name_UP[9] + `</p><span>` + earring_price_UP[9] + `원</span><p class="g1_text">`+ earring_g1_text_UP[9] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[8] + `.jfif" alt="` + earring_UP[8] + `"><p>` + earring_name_UP[8] + `</p><span>` + earring_price_UP[8] + `원</span><p class="g1_text">`+ earring_g1_text_UP[8] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[3] + `.jfif" alt="` + earring_UP[3] + `"><p>` + earring_name_UP[3] + `</p><span>` + earring_price_UP[3] + `원</span><p class="g1_text">`+ earring_g1_text_UP[3] +`</p></a></li>`;
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[1] + `.jfif" alt="` + earring_UP[1] + `"><p>` + earring_name_UP[1] + `</p><span>` + earring_price_UP[1] + `원</span><p class="g1_text">`+ earring_g1_text_UP[1] +`</p></a></li>`;
                }
            });
            $(".product_option_list:nth-child(4)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 9; 6 <= i; i--){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 9; 6 <= i; i--){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 9; 6 <= i; i--){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 9; 6 <= i; i--){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 9; 6 <= i; i--){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
            });
        }else if(gold_color == "모든 색상"){
            const g1_on = g1.classList.contains('on');
            const g2_on = g2.classList.contains('on');
            const g3_on = g3.classList.contains('on');
            const g4_on = g4.classList.contains('on');
            if(g1_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
                $(".g1_text").addClass("on");
            }else if(g2_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g3_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g4_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else{
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }
            $(".product_option_list:nth-child(1)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring.length; i++){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring.length; i++){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring.length; i++){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring.length; i++){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 0; i < earring.length; i++){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
                
            });
            $(".product_option_list:nth-child(2)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring_price_UP.length; i++){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring_price_UP.length; i++){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring_price_UP.length; i++){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring_price_UP.length; i++){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 0; i < earring_price_UP.length; i++){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }
            });
            $(".product_option_list:nth-child(3)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = earring_price_UP.length-1; 0<=i; i--){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = earring_price_UP.length-1; 0<=i; i--){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = earring_price_UP.length-1; 0<=i; i--){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = earring_price_UP.length-1; 0<=i; i--){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = earring_price_UP.length-1; 0<=i; i--){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }
            });
            $(".product_option_list:nth-child(4)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = earring.length-1; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = earring.length-1; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = earring.length-1; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = earring.length-1; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = earring.length-1; 0 <= i; i--){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
            });
        }else{
            const g1_on = g1.classList.contains('on');
            const g2_on = g2.classList.contains('on');
            const g3_on = g3.classList.contains('on');
            const g4_on = g4.classList.contains('on');
            if(g1_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
                $(".g1_text").addClass("on");
            }else if(g2_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g3_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else if(g4_on == true){
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }else{
                product.innerHTML = ``;
                for (let i = 0; i < earring.length; i++){
                    //console.log(earring[i]);
                    product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                }
            }
            $(".product_option_list:nth-child(1)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring.length; i++){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring.length; i++){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring.length; i++){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring.length; i++){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 0; i < earring.length; i++){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
                
            });
            $(".product_option_list:nth-child(2)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring_price_UP.length; i++){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring_price_UP.length; i++){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring_price_UP.length; i++){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = 0; i < earring_price_UP.length; i++){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = 0; i < earring_price_UP.length; i++){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }
            });
            $(".product_option_list:nth-child(3)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = earring_price_UP.length-1; 0<=i; i--){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = earring_price_UP.length-1; 0<=i; i--){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = earring_price_UP.length-1; 0<=i; i--){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = earring_price_UP.length-1; 0<=i; i--){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = earring_price_UP.length-1; 0<=i; i--){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
                    }
                }
            });
            $(".product_option_list:nth-child(4)").click(function(e){
                e.preventDefault();
                const g1_on = g1.classList.contains('on');
                const g2_on = g2.classList.contains('on');
                const g3_on = g3.classList.contains('on');
                const g4_on = g4.classList.contains('on');
                if(g1_on == true){
                    product.innerHTML = ``;
                    for (let i = earring.length-1; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                    $(".g1_text").addClass("on");
                }else if(g2_on == true){
                    product.innerHTML = ``;
                    for (let i = earring.length-1; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g3_on == true){
                    product.innerHTML = ``;
                    for (let i = earring.length-1; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else if(g4_on == true){
                    product.innerHTML = ``;
                    for (let i = earring.length-1; 0 <= i; i--){
                        product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }else{
                    product.innerHTML = ``;
                    for (let i = earring.length-1; 0 <= i; i--){
                        //console.log(earring[i]);
                        product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
                    }
                }
            });
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

    /* product_option_list 스크립트 */
    $(".product_option_list:nth-child(1)").click(function(e){
        e.preventDefault();
        const g1_on = g1.classList.contains('on');
        const g2_on = g2.classList.contains('on');
        const g3_on = g3.classList.contains('on');
        const g4_on = g4.classList.contains('on');
        if(g1_on == true){
            product.innerHTML = ``;
            for (let i = 0; i < earring.length; i++){
                product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
            }
            $(".g1_text").addClass("on");
        }else if(g2_on == true){
            product.innerHTML = ``;
            for (let i = 0; i < earring.length; i++){
                product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
            }
        }else if(g3_on == true){
            product.innerHTML = ``;
            for (let i = 0; i < earring.length; i++){
                product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
            }
        }else if(g4_on == true){
            product.innerHTML = ``;
            for (let i = 0; i < earring.length; i++){
                product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
            }
        }else{
            product.innerHTML = ``;
            for (let i = 0; i < earring.length; i++){
                //console.log(earring[i]);
                product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
            }
        }
        
    });
    $(".product_option_list:nth-child(2)").click(function(e){
        e.preventDefault();
        const g1_on = g1.classList.contains('on');
        const g2_on = g2.classList.contains('on');
        const g3_on = g3.classList.contains('on');
        const g4_on = g4.classList.contains('on');
        if(g1_on == true){
            product.innerHTML = ``;
            for (let i = 0; i < earring_price_UP.length; i++){
                product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
            }
            $(".g1_text").addClass("on");
        }else if(g2_on == true){
            product.innerHTML = ``;
            for (let i = 0; i < earring_price_UP.length; i++){
                product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
            }
        }else if(g3_on == true){
            product.innerHTML = ``;
            for (let i = 0; i < earring_price_UP.length; i++){
                product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
            }
        }else if(g4_on == true){
            product.innerHTML = ``;
            for (let i = 0; i < earring_price_UP.length; i++){
                product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
            }
        }else{
            product.innerHTML = ``;
            for (let i = 0; i < earring_price_UP.length; i++){
                //console.log(earring[i]);
                product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
            }
        }
    });
    $(".product_option_list:nth-child(3)").click(function(e){
        e.preventDefault();
        const g1_on = g1.classList.contains('on');
        const g2_on = g2.classList.contains('on');
        const g3_on = g3.classList.contains('on');
        const g4_on = g4.classList.contains('on');
        if(g1_on == true){
            product.innerHTML = ``;
            for (let i = earring_price_UP.length-1; 0<=i; i--){
                product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
            }
            $(".g1_text").addClass("on");
        }else if(g2_on == true){
            product.innerHTML = ``;
            for (let i = earring_price_UP.length-1; 0<=i; i--){
                product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
            }
        }else if(g3_on == true){
            product.innerHTML = ``;
            for (let i = earring_price_UP.length-1; 0<=i; i--){
                product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
            }
        }else if(g4_on == true){
            product.innerHTML = ``;
            for (let i = earring_price_UP.length-1; 0<=i; i--){
                product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
            }
        }else{
            product.innerHTML = ``;
            for (let i = earring_price_UP.length-1; 0<=i; i--){
                //console.log(earring[i]);
                product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring_UP[i] + `.jfif" alt="` + earring_UP[i] + `"><p>` + earring_name_UP[i] + `</p><span>` + earring_price_UP[i] + `원</span><p class="g1_text">`+ earring_g1_text_UP[i] +`</p></a></li>`;
            }
        }
    });
    $(".product_option_list:nth-child(4)").click(function(e){
        e.preventDefault();
        const g1_on = g1.classList.contains('on');
        const g2_on = g2.classList.contains('on');
        const g3_on = g3.classList.contains('on');
        const g4_on = g4.classList.contains('on');
        if(g1_on == true){
            product.innerHTML = ``;
            for (let i = earring.length-1; 0 <= i; i--){
                product.innerHTML += `<li class="product_list g1"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
            }
            $(".g1_text").addClass("on");
        }else if(g2_on == true){
            product.innerHTML = ``;
            for (let i = earring.length-1; 0 <= i; i--){
                product.innerHTML += `<li class="product_list g2"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
            }
        }else if(g3_on == true){
            product.innerHTML = ``;
            for (let i = earring.length-1; 0 <= i; i--){
                product.innerHTML += `<li class="product_list g3"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
            }
        }else if(g4_on == true){
            product.innerHTML = ``;
            for (let i = earring.length-1; 0 <= i; i--){
                product.innerHTML += `<li class="product_list g4"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
            }
        }else{
            product.innerHTML = ``;
            for (let i = earring.length-1; 0 <= i; i--){
                //console.log(earring[i]);
                product.innerHTML += `<li class="product_list"><a href="#"><img src="./images/product/earring/` + earring[i] + `.jfif" alt="` + earring[i] + `"><p>` + earring_name[i] + `</p><span>` + earring_price[i] + `원</span><p class="g1_text">`+ earring_g1_text[i] +`</p></a></li>`;
            }
        }
    });
});