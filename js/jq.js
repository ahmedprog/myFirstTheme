/**
 * Created by Ahmed on 5/8/2016.
 */

$(function (){
   'use strict';
    var myHeader= $(".header"),
        mySlider=$('.bxslider');
    // Adjust  Header Height
    myHeader.height($(window).height());
    $(window).resize(function(){
            myHeader.height($(window).height());
            mySlider.each(function(){
                $(this).css('paddingTop',( $(window).height() - $('.bxslider li').height() ) / 2);
            });

        }

    );
    $(".links li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });


    mySlider.each(function(){
        $(this).css('paddingTop',( $(window).height() - $('.bxslider > li').height() ) / 2);
    });
    mySlider.bxSlider({
        pager: false
    });
    $(".links li a").click(function(){
        $("html, body").animate({
            scrollTop:$("#"+ $(this).data('value')).offset().top
        },1000);
    });
    /*make Auto Slider in Testimonials*/
    $(function autoSlider(){
        $(".slider .acSlider").each(function(){
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000 , function(){
                    $(this).removeClass('acSlider').next().addClass('acSlider').fadeIn();
                autoSlider();
                });

            }else{
                $(this).delay(3000).fadeOut(1000, function(){
                   $(this).removeClass('acSlider');
                    $(".slider div").eq(0).addClass("acSlider").fadeIn();
                    autoSlider();
                });


            }
        });
    }());
    $('.gallery').mixItUp();

    $(".our-projects  ul li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    /* Dialog */
    $(".dialog-form").dialog({
        autoOpen:false,
        modal:true,
        buttons: {'create user': save_data }
    });
    function save_data(){
        var nameVal =$("#name").val(),
            mobileVal =$("#mobile").val();
        $("#users tbody").append("<tr><td>"+nameVal+"</td><td>"+mobileVal+"</td></tr>");
        $(".dialog-form").dialog("close");
    }
    $("#addCustomer").on("click",function(){
        $(".dialog-form").dialog("open");
    });



});

