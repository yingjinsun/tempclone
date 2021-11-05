$(function () {

    $("#st-control-5").click(function () {
       window.location.href="/shop";
    });
    $("#st-control-4").click(function () {
       window.location.href="/team";
    });
    $(".btn-1").click(function () {
        Show();
    });

    $("#modal").click(function () {
        Hide();
    })

    let num = 0;
    let timer = null;
    autoMove();

    $(".culture-pictures").mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        autoMove();
    });

    $(".left_click").hover(function () {
        $(".left_click").css("color", "white");
    }, function () {
        $(".left_click").css("color", "rgba(139, 143, 161, 0.8)");
    }).click(function () {
        if (num >= 0) {
            num--;
        }
        if (num < 0) {
            //如果移动到了最后一张图，就num赋值1，重新开始循环.
            num = 4;
            $(".ul-list").css("margin-left", "-2300px");
        }

        let margin = -460 * num + "px";
        $(".ul-list").animate({marginLeft: margin}, 1000);
    });

    $(".right_click").hover(function () {
        $(".right_click").css("color", "white");
    }, function () {
        $(".right_click").css("color", "rgba(139, 143, 161, 0.8)");
    }).click(function () {
        if (num <= 5) {
            num++;
        }
        if (num > 5) {
            //如果移动到了最后一张图，就num赋值1，重新开始循环.
            num = 1;
            $(".ul-list").css("margin-left", "0px");
        }

        let margin = -460 * num + "px";
        $(".ul-list").animate({marginLeft: margin}, 1000);
    });

    function autoMove() {
        timer = setInterval(function () {
            num++;//创建一个全局变量来控制图的运动次数

            if (num > 5) {
                //如果移动到了最后一张图，就num赋值1，重新开始循环.
                num = 1;
                $(".ul-list").css("margin-left", "0px");
            }

            let margin = -460 * num + "px";
            console.log(margin);
            $(".ul-list").animate({marginLeft: margin}, 1000);
        }, 2500);
    };

    //离开页面时关闭定时器, 防止出现加速问题
    $(window).bind('beforeunload', function () {
        clearInterval(timer)
    });

    $(".professional-container").mouseenter(function () {
        $(".screen-professional").animate({marginTop: '0px'});
    });
    $(".professional-container").mouseleave(function () {
        $(".screen-professional").animate({marginTop: '265px'});
    });
    $(".amateur-container").mouseenter(function () {
        $(".screen-amateur").animate({marginTop: '0px'});
    });
    $(".amateur-container").mouseleave(function () {
        $(".screen-amateur").animate({marginTop: '265px'});
    });

    $("#event1").mouseenter(function () {
        $("#event1 .center .content").css("background-color", "#99FF99");
    }).mouseleave(function () {
        $("#event1 .center .content").css("background-color", "white");
    })

    $("#event2").mouseenter(function () {
        $("#event2 .center .content").css("background-color", "#99FF99");
    }).mouseleave(function () {
        $("#event2 .center .content").css("background-color", "white");
    })

    $("#event3").mouseenter(function () {
        $("#event3 .center .content").css("background-color", "#99FF99");
    }).mouseleave(function () {
        $("#event3 .center .content").css("background-color", "white");
    })

    $("#event4").mouseenter(function () {
        $("#event4 .center .content").css("background-color", "#99FF99");
    }).mouseleave(function () {
        $("#event4 .center .content").css("background-color", "white");
    })
});

function Show(){
    document.getElementById('shade').classList.remove('hide');
    document.getElementById('modal').classList.remove('hide');
}
function Hide(){
    document.getElementById('shade').classList.add('hide');
    document.getElementById('modal').classList.add('hide');
}