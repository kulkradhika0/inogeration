$(document).ready(function() {

/*    $(".tab-content").not("#tab-1").css("display", "none");
    $(".tabActive").css("border-bottom", "2px solid #e60000");
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).css("color", "#333");
        $(".activeTb").not(this).css("display", "none");
        $(this).css("border-bottom", "2px solid #e60000");
        $(".tabs-menu a").not(this).removeAttr("style");
      
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });*/

/*    $("#contribute .tab-content").not("#tab-1").css("display", "none");
    $("#contribute .tabActive").css("background-color", "#007B9A");
     $("#contribute .tabActive").css("color", "#fff");
    $("#contribute .tabActive").css("border-bottom", "2px solid #007B9A");

    $("#contribute .tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).css("color", "#fff");
        $(this).css("background-color", "#007B9A");
         $(this).css("border-bottom", "2px solid #007B9A");
        $("#contribute .tabs-menu a").not(this).removeAttr("style");
        /*$(".tabs-menu a").not(this).css("color", "#5e2750"); */
      /*  var tab = $(this).attr("href");
        $("#contribute .tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });*/
console.log('inside Jquery $(Document).ready()');
    
    $('[data-toggle="tooltip"]').tooltip();   
/*    $('[data-toggle="popover"]').popover(); */
/*
    var popoverTemplate = ['<div class="timePickerWrapper popover">',
                                   '<div class="arrow"></div>',
                                   '<div class="popover-content">',                                    
                                   '</div>',
                               '</div>'].join('');
     
        var content = ['<div class="sortedlist">Latest </div>',
                      '<div class="sortedlist ">Oldest</div>',
                      ].join('');


       $('body').popover({
           selector: '[rel=popover]',
           trigger: 'click',
           content : content,
           template: popoverTemplate,
           placement: "bottom",
           html: true
       });
*/


    //side menu fucntion
    $(".sidemenu").click(function() {
        var ht = $(window).height();
        $("#sideBar").toggleClass("hidetopNav");
        $(".containr-sidemenu").css('height', ht);
        $('body').css('overflow', 'hidden');
        $(".loginBox").hide();
        $(".login-bttn").removeClass("login-bttn-active");
        /*$(this).toggleClass('login-bttn-active');*/
    });
    $(".has-nav").click(function() { // Accordian Side menu  
        if ((screen.width <= 980)) {
            $(this).find(".collapse-nav").toggleClass("show");
            $(this).find(":first").toggleClass('toggleArrow');
        }
    });
    $(".has-foot-nav").click(function() { /*    Accordian footer menu */
        if ((screen.width <= 980)) { /* target only Screen size for mobile and tablet*/
            $(this).find(".collapse-nav").toggleClass("show");
            $(this).find(".foottoggleArrow").toggleClass('foottoggleArrow-open');
        }
    });
    $(".header-nav-list li").hover(function() {
        if ((screen.width >= 980)) {
            /*alert("Desktop");*/
            $(".header-nav-list li a").removeAttr("style");
            $(this).children('.header-body-main').parent('.header-nav-list li').css({
                "background-color": "#fff"
            });
            $(this).find(".header-body-main").slideDown(300).show();
            $(this).parent("a").css({
                "background-color": "red"
            });
            $(".header-body-main ul li").hover(function() {
                $(".header-nav-list li a").removeAttr("style");
                $(".header-body-main ul li a").removeAttr("style");
                $(this).parents(".header-nav-list li").children("a").css({
                    "color": "#000"
                });
            }, function() {
                $(".header-nav-list li a").removeAttr("style");
                $(".header-body-main ul li a").removeAttr("style");
                $(this).parents(".header-nav-list li").children("a").css({
                    "color": "#fff"
                });
            });
            $("ul.header-nav-list-sub").hover(function() {
                $(this).removeAttr("style");
                $(this).parents(".header-nav-list li").children("a").css({
                    "color": "#000"
                });
            }, function() {
                $(this).removeAttr("style");
                $(this).parents(".header-nav-list li").children("a").css({
                    "color": "#fff"
                });
            });
        }
    }, function() {
        if ((screen.width >= 980)) {
            $(this).removeAttr("style");
            $(this).find(".header-body-main").slideUp(300).hide();
            $(this).css({
                "background-color": "transparent"
            });
        }
    });
    // Search popup Start
    $("#search-popup").click(function() {
        $("#search-popup-bg").slideDown().show();
    });
    $(".close-popup").click(function() {
        $("#search-popup-bg").hide();
    });
    // Search popup End
    // Sticky Header Start 
    $(window).scroll(function() {
        var stickyNavDiv = $("header");
        var scrollPage = $(window).scrollTop();
        if (scrollPage >= 50) {
            $(stickyNavDiv).addClass("sticky-nav");
        } else {
            $(stickyNavDiv).removeClass("sticky-nav");
        }
    });
    // Sticky Header End

    setTimeout(function() {
       $('.hidecontent').css('display', 'block');
      $('.loader').css('display', 'none');

        $(".variable").slick({
            dots: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            variableWidth: false
        });

        $(".latestArticle_tiles").slick({
            dots: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            variableWidth: false
        });
    }, 2000);

 /* $(".saveButt").click(function () {

     $('.loader').css('display', 'block');
      $('.tick_img').css('display', 'none');

    setTimeout(function() {
        $('.loader').css('display', 'none');
           $('.tick_img').css('display', 'block');
        
    }, 2000);

});*/

/*    $(".slidebox").click(function () {

      var doc_path=$(this).parent().find('input').val();
      window.open(doc_path,'window name',"width=800, height=600",'_blank').focus();
            
    });*/


/*
    $("#upload_file").click(function () {

 
        var top=400, left=600;

     var articleId =$(this).parent().find('input').val();
 
     $("#article_id").val(articleId);
     var doc_path='upload.html?param='+articleId;
     window.open(doc_path,'upload file',"width=400, height=250, top="+top+", left="+left).focus();
   
            
    });*/

/*
    $("#searchButt").click(function () {

      
      var param =$('.searchText').val();
      //4yzfu

     // window.location.replace('https://api.myjson.com/bins/'+param);
     
      window.location.replace('searchbykeyword/'+param);
            
    });


    $('.searchText').keypress(function (e) {
     var key = e.which;
     if(key == 13)  // the enter key code
      {
       
        var param =$('.searchText').val();
        
        window.location.replace('searchbykeyword/'+param);
      }
    }); */ 

/*
	 var myparam=  getUrlParameter('param')
          $('#searchResultText').val(myparam); 
             

             function getUrlParameter(sParam) {
            
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('?'),
            sParameterName,
            i;


            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
             }
            }
        };*/

     /*      setTimeout(function() {
               $('.mypage').css('display', 'block');
             
           }, 5000);*/

});

