$(function(){
    //header gnb
    $('.gnb .new').mouseover(function(){
        $(this).addClass('on');
        $('.gnb ul').addClass('on');
    });

    $('.gnb .new').mouseleave(function(){
        $(this).removeClass('on');
        $('.gnb ul').removeClass('on');
    });

    //header menu_open
    $('header .menu_area .menu').click(function(e){
        e.preventDefault();

        $('header .menu_open').toggleClass('active');

        $('header').toggleClass('open');
        
        $('body').toggleClass('scroll_h');
    });

    $('.menu_open .main').click(function(e){
        e.preventDefault();

        h = $(this).siblings('.sub').children('ul').outerHeight();

        if($(this).siblings('.sub').height() > 0){
            $('.gnb .sub').stop().animate({height:0},300);
        }else{
            $('.gnb .sub').stop().animate({height:0},300);
            $(this).siblings('.sub').animate({height:h},300);
        }
    });


    //main_vis
    var swiper = new Swiper(".main_vis", {
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


    //scroll
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        target = $('.sc01_campaign').offset().top;

        if(curr >= target){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }
        if(curr >= target){
            $('.under').addClass('on');
        }else{
            $('.under').removeClass('on');
        }
    });

    //text
    $('.txt_motion').each(function(index, item){ 
        
        gsap.from(item,{
            scrollTrigger:{
                trigger:item,
                start:"top 80%", 
                end:"bottom top",
                //markers:true
            },
            duration:1,
            yPercent:20,
            opacity:0,
            stagger:0.1,
        })
    })

    //img
    $('.img_motion').each(function(index, item){
        
        gsap.to(item,{
            scrollTrigger:{
                trigger:item,
                start:"top 80%",
                end:"bottom top",
                //markers:true,
                scrub:1,
            },
            duration:1,
            scale:1.2,
            //yPercent:20,
        })
    
    })

    //video
    $('#videoPlay').click(function(){
        $('.sc04_movie video').get(0).play();
        $('.sc04_movie button img').addClass('on');
    })

    //sc07
    gsap.from('.sc07_rolling .wrap',{
        scrollTrigger:{
            trigger:'.sc07_rolling .rolling01',
            start:"top 60%",
            end:"right top",
            scrub:1,
            //markers:true,
        },
        xPercent: -50,
        duration: 1.5,
    })
      
    //sc08
    gsap.from('.sc_intro li',{
        scrollTrigger:{
            trigger:'.sc_intro',
            start:"top 80%",
            end:"bottom top",
            //markers:true
        },
        duration:1,
        yPercent:50,
        opacity:0,
        stagger:0.3,
    })
    
    //sc09
    gsap.from('.sc09_product li',{
        scrollTrigger:{
            trigger:'.sc09_product',
            start:"top 80%",
            end:"bottom top",
            //markers:true
        },
        duration:0.8,
        yPercent:50,
        opacity:0,
        stagger:0.3,
    })

    //sc10
    gsap.from('.sc10_product li',{
        scrollTrigger:{
            trigger:'.sc10_product',
            start:"top 80%",
            end:"bottom top",
            //markers:true
        },
        duration:0.8,
        yPercent:50,
        opacity:0,
        stagger:0.3,
    })
        
    //footer_family
    $('.select .family > a').click(function(e){
        e.preventDefault()
        $('.select_box').fadeToggle('fast')
        $(this).toggleClass('on')
    });
});


