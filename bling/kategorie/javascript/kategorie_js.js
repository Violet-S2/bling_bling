jQuery(document).ready(function(){
    /* 전체 카테고리 */
    const product = document.querySelector(".product");

    function Create_product_list(){
        //HTML Tag 생성
        product.innerHTML += `<li class="product_list"></li>`;
        const product_list = document.querySelector(".product_list");
        for (let i = 1 ; i < product_list.length; i++){
            product_list.innerHTML += `<a href="#"><img src="./images/product/earring/earring_1_1.jpg" alt="earring_ring_1"></a>`;
            product_list.innerHTML += `<a href="#"><img src="./images/product/` + earring + `" alt="` + earring + `"></a>`;
        }
    }
});