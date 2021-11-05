 $(document).ready(function(){
   $('#tt1').fadeIn(3000);
   $('#tt2').fadeIn(3000);
   $('.pads').hover(function(){
     $('#amat2').addClass("strange");
   },function(){
     $('#amat2').removeClass("strange");
   });

   $('.wrap1').hover(function(){
     $('.goodfil').css("z-index","8");
     $('.wrap1').css("z-index","9");
     $('#tt1').css("z-index","9");
   },function(){
     $('.goodfil').css("z-index","-2");
     $('.wrap1').css("z-index","1");
     $('#tt1').css("z-index","1");
   });
   $('.wrap2').hover(function(){
     $('.goodfil').css("z-index","8");
     $('.wrap2').css("z-index","9");
     $('#tt2').css("z-index","9");
   },function(){
     $('.goodfil').css("z-index","-2");
     $('.wrap2').css("z-index","1");
     $('#tt2').css("z-index","1");
   });

   $('#pro1').click(function(){
     $('.conta').css("display","none");
     $('.tit').css("display","none");
 //$('.art').css("display","none");
 $('.pro_detail').css("display","block");
 $('.goodfil').css("z-index","0");
 setTimeout(function(){
   $('.goodfil').css("z-index","0");
 },50);
});

   $('#pro2').click(function(){
     $('.conta').css("display","none");
     $('.tit').css("display","none");
 //$('.art').css("display","none");
 $('.pro_competition').css("display","block");
 $('.goodfil').css("z-index","0");
 setTimeout(function(){
   $('.goodfil').css("z-index","0");
 },50);
});


   $('#pro3').click(function(){
     $('.conta').css("display","none");
     $('.tit').css("display","none");
 //$('.art').css("display","none");
 $('.showcase').css("display","block");
 $('.goodfil').css("z-index","0");
 setTimeout(function(){
   $('.goodfil').css("z-index","0");
 },50);
});

   $('#pro4').click(function(){
     $('.conta').css("display","none");
     $('.tit').css("display","none");
 //$('.art').css("display","none");
 $('.achieve').css("display","block");
 $('.goodfil').css("z-index","0");
 setTimeout(function(){
   $('.goodfil').css("z-index","0");
 },50);
});

   $('#amat1').click(function(){
     $('.conta').css("display","none");
     $('.tit').css("display","none");
 //$('.art').css("display","none");
 $('.amat_detail').css("display","block");
 $('.goodfil').css("z-index","0");
 setTimeout(function(){
   $('.goodfil').css("z-index","0");
 },50);
});

   $('#amat2').click(function(){
     $('.conta').css("display","none");
     $('.tit').css("display","none");
 //$('.art').css("display","none");
 $('.compe_ama').css("display","block");
 $('.goodfil').css("z-index","0");
 setTimeout(function(){
   $('.goodfil').css("z-index","0");
 },50);
});

   $('.pads').click(function(){
     $('.conta').css("display","none");
     $('.tit').css("display","none");
 //$('.art').css("display","none");
 $('.compe_ama').css("display","block");
 $('.goodfil').css("z-index","0");
 setTimeout(function(){
   $('.goodfil').css("z-index","0");
 },50);
});

   $('#amat3').click(function(){
     $('.conta').css("display","none");
     $('.tit').css("display","none");
 //$('.art').css("display","none");
 $('.ama_activity').css("display","block");
 $('.goodfil').css("z-index","0");
 setTimeout(function(){
   $('.goodfil').css("z-index","0");
 },50);
});

   $('.back').click(function(){

     $('.container').css("display","none");
     $('.section_competition').css("display","none");
     $('.showcase').css("display","none");
     $('.achieve').css("display","none");
     $('.ama_activity').css("display","none");
     $('.goodfil').css("z-index","-2");
     $('.conta').css("display","block");
     $('.tit').css("display","block");

     setTimeout(function(){
       $('.goodfil').css("z-index","-2");
     },50);
   });


   $('#pro1').hover(function(){
     $('.cate1').css("display","block");
     $('.cate0').css("display","none");
   },function(){
     $('.cate1').css("display","none");
     $('.cate0').css("display","block");
   });

   $('#pro2').hover(function(){
     $('.cate2').css("display","block");
     $('.cate0').css("display","none");
   },function(){
     $('.cate2').css("display","none");
     $('.cate0').css("display","block");
   });

   $('#pro3').hover(function(){
     $('.cate3').css("display","block");
     $('.cate0').css("display","none");
   },function(){
     $('.cate3').css("display","none");
     $('.cate0').css("display","block");
   });

   $('#pro4').hover(function(){
     $('.cate4').css("display","block");
     $('.cate0').css("display","none");
   },function(){
     $('.cate4').css("display","none");
     $('.cate0').css("display","block");
   });

   $('#amat1').hover(function(){
     $('.cate6').css("display","block");
     $('.cate5').css("display","none");
   },function(){
     $('.cate6').css("display","none");
     $('.cate5').css("display","block");
   });
   $('#amat2').hover(function(){
     $('.cate7').css("display","block");
     $('.cate5').css("display","none");
   },function(){
     $('.cate7').css("display","none");
     $('.cate5').css("display","block");
   });
   $('#amat3').hover(function(){
     $('.cate8').css("display","block");
     $('.cate5').css("display","none");
   },function(){
     $('.cate8').css("display","none");
     $('.cate5').css("display","block");
   });
   $('.pads').hover(function(){
     $('.cate7').css("display","block");
     $('.cate5').css("display","none");
   },function(){
     $('.cate7').css("display","none");
     $('.cate5').css("display","block");
   });
   go();
   var num=0;
   function ppp(){
    if(num<10){
      num++;
      if (num>=9) {$(".conta").fadeIn();}
      str="blur("+num+"px)";
      console.log(str);
      $(".bg-blur").css("-webkit-filter",str);
      $(".bg-blur").css("filter",str);
    }
  }
  function go(){
   timer=setInterval(ppp,150);
 }
});