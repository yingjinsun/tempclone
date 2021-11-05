<template>

<body>
<link rel="stylesheet" href="./css/shopping.css">
<link rel="stylesheet" href="./css/product.css">
<script type="application/javascript" defer src="http://apps.bdimg.com/libs/jquery/1.6.4/jquery.js"></script>
<script type="application/javascript" defer  src="./js/shopping.js"></script>
<title>Fly tennis Shopping</title>

<div class="products-container">
    <ul class="products-previews">
        <div class="product-panel-1">
            <li class="li_1">
                <a href="#0">
                    <div class="title">
                        <h2>T-shirt For Men</h2>
                        <p>Club exclusive tennis T-shirt</p>
                    </div>
                    <a class="btn btn-1" href="#">
                        <svg>
                            <rect height="100%" width="100%" fill="none" x="0" y="0"></rect>
                        </svg>
                        more
                    </a>
                </a>
            </li>
            <div class="product product-1">
                <img src="image/product/pd1.jpg" height="280" width="305">
                <p class="price">Price: <span>￥599.00</span></p>
                <p style="color: black">Club exclusive tennis T-shirt for men</p>
                <button>Buy Now</button>
            </div>
        </div>

        <div class="product-panel-2">
            <li class="li_2">
                <a href="#0">
                    <div class="title">
                        <h2>Tennis Hat</h2>
                        <p>lub exclusive tennis hat</p>
                    </div>
                    <a class="btn btn-2" href="#">
                        <svg>
                            <rect height="100%" width="100%" fill="none" x="0" y="0"></rect>
                        </svg>
                        more
                    </a>
                </a>
            </li>
            <div class="product product-1">
                <img src="image/product/pd2.jpg" height="280" width="305">
                <p class="price">Price: <span>￥599.00</span></p>
                <p style="color: black">Club exclusive tennis hat for men</p>
                <button>Buy Now</button>
            </div>
        </div>

        <div class="product-panel-3">
            <li class="li_3">
                <a href="#0">
                    <div class="title">
                        <h2 style="color: rgba(0,0,0,0.7)">T-shirt For Women</h2>
                        <p style="color: rgba(0,0,0,1)">Club's exclusive memorial T-shirt</p>
                    </div>
                    <a class="btn btn-3" href="#">
                        <svg>
                            <rect height="100%" width="100%" fill="none" x="0" y="0"></rect>
                        </svg>
                        more
                    </a>
                </a>
            </li>
            <div class="product product-1">
                <img src="image/product/pd3.jpg" height="280" width="305">
                <p class="price">Price: <span>￥599.00</span></p>
                <p style="color: black">Club's exclusive memorial T-shirt for women</p>
                <button>Buy Now</button>
            </div>
        </div>

        <div class="product-panel-4">
            <li class="li_4">
                <a href="#0">
                    <div class="title">
                        <h2>Tennis Racket</h2>
                        <p>Club exclusive single tennis racket</p>
                    </div>
                    <a class="btn btn-4" href="#">
                        <svg>
                            <rect height="100%" width="100%" fill="none" x="0" y="0"></rect>
                        </svg>
                        more
                    </a>
                </a>
            </li>
            <div class="product product-1">
                <img src="image/product/pd4.jpg" height="280" width="305">
                <p class="price">Price: <span>￥599.00</span></p>
                <p style="color: black">Club exclusive tennis racket for men and women</p>
                <button>Buy Now</button>
            </div>
        </div>
    </ul>


</div>


</body>
</template>
<style>
.li_1 {
    background: url("./image/product/pdb1.jpg") no-repeat 70% 20%;
    background-size: 300% 100%;
}

.li_2 {
    background: url("./image/product/pdb3.jpg") no-repeat 45% 45%;
    background-size: 300% 100%;
}

.li_3 {
    background: url("./image/product/pdb2.jpg") no-repeat  50% 50%;
    background-size: 280% 100%;
}

.li_4 {
    background: url("./image/product/pdb4.jpg") no-repeat;
    background-size: 200% 100%;
}

.product-panel-1 {
    left: 0%;
}

.product-panel-2 {
    left: 25%;
}

.product-panel-3 {
    left: 50%;
}

.product-panel-4 {
    left: 75%;
}

.btn-1,
.btn-2,
.btn-4 {
    color: whitesmoke;
}

.btn-1 rect,
.btn-2 rect,
.btn-4 rect {
    stroke: navajowhite;
}

.btn-3 {
    color: black;
}

.btn-3 rect {
    stroke: #EE7700;
}
* {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

.products-container {
    position: absolute;
    height: 100%;
    width: 100%;
}

.products-previews {
    position: absolute;
    height: 100%;
    width: 100%;
}

.product-panel-1,
.product-panel-2,
.product-panel-3,
.product-panel-4 {
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 25%;
    color: red;
}

.title {
    margin-top: 95%;
}

.title h2 {
    font-family: "Times New Roman";
    font-size: 30px;
    color: whitesmoke;
}

.title p {
    margin-top: 5%;
    color: whitesmoke;
    font-family: "Bradley Hand ITC", serif;
}

.products-previews li {
    /*opacity: 0;*/
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    z-index: 5;
}

.product {
    position: relative;
    border: red 3px solid;
    margin: 10% 10%;
    height: 90%;
    width: 80%;
}

.product img {
    position: relative;
    border: rgba(0, 0, 0, 0.5) 2px solid;
}

.product p {
    margin: 5% auto;
    font-size: 20px;
    font-family: sans-serif;
    color: whitesmoke;
    text-align: center;
}

.product button {
    font: 25px "Bradley Hand ITC";
    color: whitesmoke;
    text-shadow: #EE7700;
    background-color: rgba(0, 0, 0, 0.8);
    border: #EE7700 1.5px double;
    height: 10%;
    width: 80%;
    margin-left: 10%;
    margin-top: 50%;
}

.price {
    background-color: grey;
}

.price span {
    color: red ;
    font-size: 25px;
    font-family: "Microsoft YaHei";
}

/*button*/
.btn {
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 45px;
    text-align: center;
    max-width: 160px;
    left: 30%;
    top: 80%;
    position: absolute;
    text-decoration: none;
    text-transform: uppercase;
    vertical-align: middle;
    width: 100%;
    z-index: 11;
}
.btn:hover {
    text-decoration: none;
    background:transparent;
    text-align: center;
    float:left;
}

.btn svg {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
.btn rect {
    fill: none;
    stroke: navajowhite;
    stroke-width: 4;
    stroke-dasharray: 422, 0;
    transition: all 450ms linear 0s;
}
.btn:hover {
    background: rgba(225, 51, 45, 0);
    font-weight: 900;
    letter-spacing: 1px;
    transition: all 150ms linear 0s;
}
.btn:hover rect {
    stroke-width: 4;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    -webkit-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
}



</style>
<script>

</script>