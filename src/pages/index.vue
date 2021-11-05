<template>

<body>
<div class="container">
    <div class="st-container">
        <!--nav start-->
        <div class="logo">
            <img src="./image/index/logo.png">
        </div>
        <input type="radio" name="radio-set" checked="checked" id="st-control-1">
        <a href="#st-panel-1">Start</a>
        <input type="radio" name="radio-set" id="st-control-2">
        <a href="#st-panel-2">Culture</a>
		<router-link type="radio" name="radio-set" id="st-control-3" to="/team">Team</router-link>
		<a href="/team">Team</a>

        <router-link type="radio" name="radio-set" id="st-control-4" to="/shop">Shopping</router-link>
		<a href="/shop">Shopping</a>
		<router-link type="radio" name="radio-set" id="st-control-5" to="/home">Manage</router-link>
		<a href="/home">Manage</a>
		
        <div class="search">
            <img src="./image/index/search.png">
            <input class="st-search">
            <img src="./image/index/user.png">
            <p>Customer</p>
        </div>
        <!--nav end content begin-->

        <div class="st-scroll">
            <section class="st-panel st-background-1" id="st-panel-1">
                <h2>Fly Tennis Club</h2>
                <p>Tennis/Gym/Profession/Team</p>
                <a class="btn btn-1" href="#">
                    <svg>
                        <rect height="100%" width="100%" fill="none" x="0" y="0"></rect>
                    </svg>
                    start
                </a>
                <div id="shade" class="c1 hide"></div>
                <div id="modal" class="c2 hide">
                    <img src="image/index/wx.png">
                </div>
            </section>

            <section class="st-panel st-background-2" id="st-panel-2">
                <h2>Our Culture</h2>
                <div class="culture-pictures">
                    <ul class="ul-list">
                        <li class="list"><a href='#'><img src="./image/index/c1.jpg"/></a></li>
                        <li class="list"><a href='#'><img src="./image/index/c2.jpg"/></a></li>
                        <li class="list"><a href='#'><img src="./image/index/c3.jpg"/></a></li>
                        <li class="list"><a href='#'><img src="./image/index/c4.jpg"/></a></li>
                        <li class="list"><a href='#'><img src="./image/index/c5.jpg"/></a></li>
                        <li class="list"><a href='#'><img src="./image/index/c1.jpg"/></a></li>
                    </ul>
                    <div class="left_click"><</div>
                    <div class="right_click">></div>
                </div>
                <div class="culture-article">
                    <article>
                        Our club has its own culture and all of our members need to be friendly. In addition to playing
                        tennis together, we also go to our coffee shop in our spare time to talk about the interesting
                        life.
                    </article>
                    <article>
                        For any competition we organize, we will observe "friendship first, competition second!" . Hope
                        the club has a relaxed and happy atmosphere, do not want to see conflict between members. We
                        value members' enthusiasm and positive attitude towards tennis most. Tennis skills are
                        secondary.
                    </article>
                    <article>
                        We hope the members of the club can be like family, help each other, love each other. ———————————EricXuan
                    </article>
                </div>
            </section>

            <section class="st-panel st-background-3" id="st-panel-3">
                <div id="events">
                    <div id="event1" class="event">
                        <div class="left">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Maecenas porttitor congue massa.</p>
                            <p>Nunc viverra imperdiet enim.</p>
                        </div>

                        <div class="center">
                            <div class="content">2018</div>
                        </div>

                        <div class="right">
                            <h3>2018</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Maecenas porttitor congue massa.</p>
                            <p>Nunc viverra imperdiet enim.</p>
                        </div>
                    </div>

                    <div id="event2" class="event">
                        <div class="left">
                            <h3>2017</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Maecenas porttitor congue massa.</p>
                            <p>Nunc viverra imperdiet enim.</p>
                        </div>

                        <div class="center">
                            <div class="content">2017</div>
                        </div>

                        <div class="right">
                            <h3>Lorem</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Maecenas porttitor congue massa.</p>
                            <p>Nunc viverra imperdiet enim.</p>
                        </div>
                    </div>

                    <div id="event3" class="event">
                        <div class="left">
                            <h3>Lorem</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Maecenas porttitor congue massa.</p>
                            <p>Nunc viverra imperdiet enim.</p>
                        </div>

                        <div class="center">
                            <div class="content">2016</div>
                        </div>

                        <div class="right">
                            <h3>2016</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Maecenas porttitor congue massa.</p>
                            <p>Nunc viverra imperdiet enim.</p>
                        </div>
                    </div>

                    <div id="event4" class="event">
                        <div class="left">
                            <h3>2015</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Maecenas porttitor congue massa.</p>
                            <p>Nunc viverra imperdiet enim.</p>
                        </div>

                        <div class="center">
                            <div class="content">2015</div>
                        </div>

                        <div class="right">
                            <h3>Lorem</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Maecenas porttitor congue massa.</p>
                            <p>Nunc viverra imperdiet enim.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="st-panel st-background-4" id="st-panel-4">
                <h2>Our Teams</h2>
                <div class="professional-container">
                    <header class="screen-professional">
                        <p>Professional Team</p>
                        <article>
                            Our professional team has a long time history,
                            Winning innumerable awards is a matter of honour and pride.
                            Every year, we recruit new members all over the world,
                            This is why we can keep up a brisk atmosphere.
                        </article>
                        <a href="team.html">learn more</a>
                    </header>
                </div>
                <div class="amateur-container">
                    <header class="screen-amateur">
                        <p>Amateur Team</p>
                        <article>
                            Our amateur team consist of members of all ages,
                            Organizing match is routine of our daily activities.
                            As for amateur, there is no strict requirement of tennis skills,
                            as long as you enjoy the process of corporate activities.
                        </article>
                        <a href="team.html">learn more</a>
                    </header>
                </div>
            </section>
        </div>
    </div>
</div>
</body>
</template>
<style>
.hide{
    display: none;
}
.c1{
    position: fixed;
    top:0;
    bottom: 0;
    left:0;
    right: 0;
    background: rgba(0,0,0,.5);
    z-index: 2;
}
.c2 {
    background-color: rgba(0, 0, 0, 0.8);
    color: navajowhite;
    position: fixed;
    width: 300px;
    height: 300px;
    top:48%;
    left: 53%;
    z-index: 3;
    margin-top: -150px;
    margin-left: -200px;
}

.alert {
    margin-left: 10px;
    margin-top: 10px;
    font-size: 25px;
    margin-bottom: 0;
}

.btn {
    color: whitesmoke;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 45px;
    text-align: center;
    max-width: 160px;
    left: 45%;
    top: 70%;
    position: absolute;
    text-decoration: none;
    text-transform: uppercase;
    vertical-align: middle;
    width: 100%;
    z-index: 11;
}
.btn:hover {
    text-decoration: none;
}
.btn-1 {
    background:transparent;
    text-align: center;
    float:left;
}
.btn-1 svg {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
.btn-1 rect {
    fill: none;
    stroke: navajowhite;
    stroke-width: 4;
    stroke-dasharray: 422, 0;
    transition: all 450ms linear 0s;
}
.btn-1:hover {
    background: rgba(225, 51, 45, 0);
    font-weight: 900;
    letter-spacing: 1px;
    transition: all 150ms linear 0s;
}
.btn-1:hover rect {
    stroke-width: 4;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    -webkit-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
}

:root {
    --turquoise: #1abc9c;
    --greensea: #16a085;

    --emerald: #2ecc71;
    --nephritis: #27ae60;

    --river: #3498db;
    --hole: #2980b9;

    --asphalt: #34495e;
    --midnight: #2c3e50;

    --sunflower: #f1c40f;
    --orange: #f39c12;

    --cloud: #ecf0f1;
    --silver: #bdc3c7;

    --alizarin: #e74c3c;
    --pome: #c0392b;
}

#events {
	margin-top: 4rem;
}

#events .event {
 	display: flex;
 	margin: -1.5rem;
}

#events .event .left, #events .event .right {
	color: var(--cloud);
    flex-grow: 1;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 1rem;
    text-align: justify;
}

#events .event .left h3, #events .event .right h3 {
    font: bold 1rem/1.5 Helvetica, sans-serif;
}

#events .event .left p, #events .event .right p {
    font: 200 0.8rem/1.5 Georgia, sans-serif;
}

#events .event .center {
	display: flex;
	align-items: center;
	justify-content: center;
    width: 6.5rem;
    height: 6.5rem;
    border: 1.5rem solid transparent;
	border-radius: 50%;
}

#events .event .center .content {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4.8rem;
    height: 4.8rem;
    font-size: 1.2rem;
	border-radius: 50%;
	background: var(--cloud);
	box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
}

/* 奇元素 */
#events .event:nth-child(odd) .center {
	transform: rotate(45deg);
}

#events .event:nth-child(odd) .center .content {
	transform: rotate(-45deg);
}

#events .event:nth-child(odd) .left {
	visibility: hidden;
}

/* 偶元素 */
#events .event:nth-child(even) .center {
	transform: rotate(-135deg);
}

#events .event:nth-child(even) .center .content {
	transform: rotate(135deg);
}

#events .event:nth-child(even) .right {
	visibility: hidden;
}

/* 4n+1元素 */
#events .event:nth-child(4n+1) .center {
	border-top-color: #f44556;
	border-right-color: #f44556;
}

#events .event:nth-child(4n+1) .center .content {
	color: #f44556;
}

#events .event:nth-child(4n+1) .left, #events .event:nth-child(4n+1) .right {
	background: #f44556;
	border-radius: 10px;
	border: rgba(0, 0 ,0 , 0.3) 5px ridge;
}

/* 4n+2元素 */
#events .event:nth-child(4n+2) .center {
	border-top-color: #e97e2e;
	border-right-color: #e97e2e;

}

#events .event:nth-child(4n+2) .center .content {
	color: #e97e2e;
}

#events .event:nth-child(4n+2) .left, #events .event:nth-child(4n+2) .right {
	background: #e97e2e;
	border-radius: 10px;
	border: rgba(0, 0 ,0 , 0.3) 5px ridge;
}

/* 4n+3元素 */
#events .event:nth-child(4n+3) .center {
	border-top-color: #13afae;
	border-right-color: #13afae;
}

#events .event:nth-child(4n+3) .center .content {
	color: #13afae;
}

#events .event:nth-child(4n+3) .left, #events .event:nth-child(4n+3) .right {
	background: #13afae;
	border-radius: 10px;
	border: rgba(0, 0 ,0 , 0.3) 5px ridge;
}

/* 4n元素 */
#events .event:nth-child(4n) .center {
	border-top-color: #105572;
	border-right-color: #105572;
}

#events .event:nth-child(4n) .center .content {
	color: #105572;
}

#events .event:nth-child(4n) .left, #events .event:nth-child(4n) .right {
	background: #105572;
	border-radius: 10px;
	border: rgba(0, 0 ,0 , 0.3) 5px ridge;
}

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    background: #ddd;
    font-weight: 400;
    font-size: 16px;
    color: #333;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
}

a {
    text-decoration: none;
    color: #555;
}

.st-container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.logo {
    width: 25%;
    height: 45px;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    background: #444444;
    z-index: 10;
}

.logo > img {
    width: 230px;
    margin-left: 85px;
    margin-top: 2px;
    height: 44px;
}

.search {
    float: left;
    width: 25%;
    height: 45px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    background: #444444;
    z-index: 10;
}

.search > img {
    float: left;
    margin-top: 14px;
    margin-left: 30px;
    width: 20px;
    height: 21px;
}

.st-search {
    position: absolute;
    float: left;
    margin-left: 10px;
    margin-top: 12px;
    height: 20px;
    width: 150px;
    background: white;
    border-radius: 15px;
    border-color: #EE7700;
}

.st-search + img {
    position: absolute;
    float: left;
    margin-top: 9px;
    margin-left: 205px;
    height: 29px;
    width: 29px;
}

.search > p {
    position: absolute;
    float: left;
    margin-top: 13px;
    margin-left: 290px;
    color: white;
    font-size: 15px;
}

.st-container > input,
.st-container > a {
    width: 10%;
    height: 45px;
    line-height: 45px;
    position: fixed;
    top: 0;
    cursor: pointer;
}

.st-container > input {
    opacity: 0;
    z-index: 10;
}

.st-container > a {
    z-index: 9;
    font-weight: 600;
    font-size: 1rem;
    font-family: Leelawadee;
    font-style: oblique;
    background: #444444;
    text-align: center;
    color: #fff;
    box-shadow: 1px 1px 1px rgba(151, 24, 64, 0.2);
}

#st-control-1, #st-control-1 + a {
    left: 25%;
}

#st-control-2, #st-control-2 + a {
    left: 35%;
}

#st-control-3, #st-control-3 + a {
    left: 45%;
}

#st-control-4, #st-control-4 + a {
    left: 55%;
}

#st-control-5, #st-control-5 + a {
    left: 65%;
}

.st-container input:checked + a,
.st-container input:checked:hover + a {
    background: #EE7700;
}

.st-container input:hover + a {
    background: #666666;
}

/*content*/
.st-scroll,
.st-panel {
    width: 100%;
    height: 100%;
    position: relative;
}

.st-scroll {
    left: 0;
    top: 0;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;
    -webkit-transition: all 0.6s ease-in-out;
}

.st-panel {
    background: #fff;
    overflow: hidden;
}

/*导航页背景*/

/*part1*/
.st-background-1 {
    background: url("./image/index/bg1.png");
    background-size: cover;
}

#st-panel-1 h2 {
    color: #EE7700;
    font-size: 100px;
    line-height: 50px;
    text-align: center;
    font-weight: 500;
    font-family: "Brush Script MT";
    width: 80%;
    position: absolute;
    left: 10%;
    top: 40%;
    margin-top: -70px;
    text-shadow: 1px 1px 1px rgba(151, 24, 64, 0.2);
    -webkit-backface-visibility: hidden;
}

#st-panel-1 p {
    position: absolute;
    width: 50%;
    left: 25%;
    top: 43%;
    font-size: 20px;
    line-height: 22px;
    padding: 0;
    text-align: center;
    -webkit-backface-visibility: hidden;
    color: antiquewhite;
    margin-top: 10px;
}

/*part2*/
.st-background-2 {
    background: url("./image/index/bg3.png");
    background-size: cover;
}

#st-panel-2 h2 {
    color: #EE7700;
    font-size: 80px;
    line-height: 50px;
    text-align: center;
    font-weight: 500;
    font-family: "Brush Script MT";
    width: 85%;
    position: absolute;
    left: 28%;
    top: 25%;
    margin-top: -70px;
    text-shadow: 1px 1px 1px rgba(151, 24, 64, 0.2);
    -webkit-backface-visibility: hidden;
}

.culture-article {
    position: absolute;
    width: 45%;
    height: 53%;
    top: 30%;
    right: 5%;
    background-color: rgba(0, 0, 0, 0.3);
    border: rgba(0, 255, 0, 0.5) 2px solid;
    border-radius: 0 45px 0 0/0 60px 0 0;
}

#st-panel-2 article {
    margin: 10px 30px;
    font-size: 28px;
    font-family: "Brush Script MT";
    color: #dddddd;
    text-indent: 40px;
}

.culture-pictures {
    position: absolute;
    width: 460px;
    height:660px;
    top: 7%;
    left: 10%;
    background-color: whitesmoke;
    border: lightgoldenrodyellow 5px ridge;
    overflow: hidden;
}

.ul-list {
    padding: 0;
    margin: 0;
    width: 2760px;
    height: 660px;
    position: absolute;
}


.list {
    list-style: none;
    float: left;
    width: 460px;
    height: 660px;
}

.list img {
    width: 100%;
    height: 100%;
    z-index: 1;
}

.left_click {
    position: absolute;
    top: 20%;
    width: 80px;
    height: 400px;
    font-size: 4em;
    color: rgba(139, 143, 161, 0.8);
    text-align: center;
    line-height: 400px;
    cursor: pointer;
}

.right_click {
    position: absolute;
    top: 20%;
    right: 0px;
    width: 80px;
    height: 400px;
    font-size: 4em;
    color: rgba(139, 143, 161, 0.8);
    text-align: center;
    line-height: 400px;
    cursor: pointer;
}

/*part3*/
.st-background-3 {
    background-image: url("./image/index/his.png");
    background-size: cover;
}

/*part4*/
.st-background-4 {
    background: url("./image/index/bg3.png");
    background-size: cover;
}

#st-panel-4 h2 {
    color: #EE7700;
    font-size: 100px;
    line-height: 50px;
    text-align: center;
    font-weight: 500;
    font-family: "Brush Script MT";
    width: 80%;
    position: absolute;
    left: 10%;
    top: 30%;
    margin-top: -70px;
    text-shadow: 1px 1px 1px rgba(151, 24, 64, 0.2);
    -webkit-backface-visibility: hidden;
}

#st-panel-4 p {
    margin-top: 0;
    text-align: center;
    font-size: 25px;
    color: ghostwhite;
}

#st-panel-4 article {
    margin: 50px 30px;
    font-size: 20px;
    color:ghostwhite;
    text-indent: 40px;
}

#st-panel-4 a {
    position: absolute;
    font-size: 20px;
    right: 0;
    bottom: 0;
    color: whitesmoke;
}

#st-panel-4 a:hover {
    color: #EE7700;
}

.professional-container {
    position: absolute;
    left: 220px;
    top: 280px;
    height: 300px;
    width: 500px;
    border-radius: 15px;
    border: #FF9966 15px ridge;
    background: url("./image/index/p1.jpg");
    background-size: 500px 300px;
    overflow: hidden;
}

.screen-professional {
    position: absolute;
    margin-top: 265px;
    height: 300px;
    width: 500px;
    background: rgba(0, 0, 0, 0.6);
}

.amateur-container {
    position: absolute;
    right: 180px;
    top: 280px;
    height: 300px;
    width: 500px;
    border-radius: 15px;
    border: #CCCC99 15px ridge;
    background: url("./image/index/p2.jpg");
    background-size: 500px 300px;
    overflow: hidden;
}

.screen-amateur {
    position: absolute;
    margin-top: 265px;
    height: 300px;
    width: 500px;
    background: rgba(0, 0, 0, 0.6);
}




/*点击导航栏移动视角*/
#st-control-1:checked ~ .st-scroll {
    -webkit-transform: translateY(0%);
}

#st-control-2:checked ~ .st-scroll {
    -webkit-transform: translateY(-100%);
}

#st-control-3:checked ~ .st-scroll {
    -webkit-transform: translateY(-200%);
}

#st-control-4:checked ~ .st-scroll {
    -webkit-transform: translateY(-300%);
}

/*标题下滑*/
#st-control-1:checked ~ .st-scroll #st-panel-1 h2,
#st-control-2:checked ~ .st-scroll #st-panel-2 h2,
#st-control-3:checked ~ .st-scroll #st-panel-3 h2,
#st-control-4:checked ~ .st-scroll #st-panel-4 h2 {
    -webkit-animation: moveDown 0.5s ease-in-out 0.2s backwards;
}
@-webkit-keyframes moveDown {
    0% {
        -webkit-transform: translateY(-100px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0px);
        opacity: 1;
    }
}

/*简介文字上滑*/
#st-control-1:checked ~ .st-scroll #st-panel-1 p,
#st-control-2:checked ~ .st-scroll #st-panel-2 .culture-article{
    -webkit-animation: moveUp 0.6s ease-in-out 0.2s backwards;
}
@-webkit-keyframes moveUp {
    0% {
        -webkit-transform: translateY(100px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0px);
        opacity: 1;
    }
}

/*历史信息左滑*/
#st-control-3:checked ~ .st-scroll #st-panel-3 #event1 .right,
#st-control-3:checked ~ .st-scroll #st-panel-3 #event3 .right {
    -webkit-animation: moveLeft 0.6s ease-in-out 0.2s backwards;
}
@-webkit-keyframes moveLeft {
    0% {
        -webkit-transform: translateX(200px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0px);
        opacity: 1;
    }
}

/*历史信息右滑*/
#st-control-3:checked ~ .st-scroll #st-panel-3 #event2 .left,
#st-control-3:checked ~ .st-scroll #st-panel-3 #event4 .left {
    -webkit-animation: moveRight 0.6s ease-in-out 0.2s backwards;
}
@-webkit-keyframes moveRight {
    0% {
        -webkit-transform: translateX(-200px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0px);
        opacity: 1;
    }
}



</style>
<script>

</script>