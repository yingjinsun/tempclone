$(function () {

    let btn1 = 0, btn2 = 0, btn3 = 0, btn4 = 0;

    $(".btn-1").click(function () {
        $(".li_1").animate({marginTop: "-200%"}, 800);
        btn1 = 1;
    });
    $(".btn-2").click(function () {
        $(".li_2").animate({marginTop: "-200%"}, 800);
        btn2 = 1;
    });
    $(".btn-3").click(function () {
        $(".li_3").animate({marginTop: "-200%"}, 800);
        btn3 = 1;
    });
    $(".btn-4").click(function () {
        $(".li_4").animate({marginTop: "-200%"}, 800);
        btn4 = 1;
    });

    $(".product-panel-1").mouseleave(function () {
        if (btn1==1) {
            $(".li_1").animate({marginTop: "0%"}, 800);
            btn1 = 0;
        }
    });

    $(".product-panel-2").mouseleave(function () {
        if (btn2==1) {
            $(".li_2").animate({marginTop: "0%"}, 800);
            btn2 = 0;
        }
    });

    $(".product-panel-3").mouseleave(function () {
        if (btn3==1) {
            $(".li_3").animate({marginTop: "0%"}, 800);
            btn3 = 0;
        }
    });

    $(".product-panel-4").mouseleave(function () {
        if (btn4==1) {
            $(".li_4").animate({marginTop: "0%"}, 800);
            btn4 = 0;
        }
    });
});