    
    // Start Header Section

    // Start Banner Section

        // $('.carousel').carousel({
        //     interval : 1000
        // })

    // End Banner Section

    // End Header Section

    //Start Info Section
        $(window).scroll(function(){
            let getscrollpoint = $(this).scrollTop();
            if(getscrollpoint >= 220){
                $('.infotexts').addClass('fromlefts');
                $('.infopices').addClass('fromrights');
            }else{
                $('.infotexts').removeClass('fromlefts');
                $('.infopices').removeClass('fromrights');
            }
        })
    //End Info Section

    // Star ADV Section
        $("#videos").click(function(){
            var getmodal = $(this).data("bs-target");
            var getvideosrc = $(this).data('video');
            var videourlwithauto = getvideosrc+"?autoplay=1";
            console.log(getmodal);
            
            $(getmodal +" iframe").attr("src",videourlwithauto);

            $(getmodal + " button.btn-close").click(function(){
                $(getmodal+ " iframe").attr("src",getvideosrc);
            })
            
            $(getmodal).click('hidden.bs.modal',function(){
                $(getmodal+ " iframe").attr("src",getvideosrc);
            })
        })
    // End ADV Section


    // Start Premises Section
        $('#lightSlider').lightSlider({
            auto:true,
            item: 4,
            loop: true,
            slideMove: 1,
            easing: 'linear',
            speed: 400,
        });
    // End Premises Sectiom

    //Start Pricing Section
        $(window).scroll(function(){
            let getscroll = $(this).scrollTop();

            if(getscroll >= 2450){
                $('.cardones').addClass("movelefts");
                $('.cardtwos').addClass('movebottoms');
                $('.cardthrees').addClass('moverights');
            }else{
                $('.cardones').removeClass("movelefts");
                $('.cardtwos').removeClass('movebottoms');
                $('.cardthrees').removeClass('moverights');
            }
        })


    // End Pricing Section

    // Start Join Us Section
        $("#accordion").accordion();
    // End Join Us Section

    // Start Footer Section
        $("#getyear").text(new Date().getUTCFullYear());
    // End Footer Section

    // Start Progress
        $(window).scroll(function(){
            var getprogress = $("#progresses");
            var getprogressvalue = $("#progressvalues");
            var getscrolltop = $(this).scrollTop();

            var getscrollHeight = $(document).height();
            var getclientHeight = $(window).height();

            var calcheight = getscrollHeight-getclientHeight;
            var getfinalheight = Math.round(getscrolltop*100/calcheight);

            getprogressvalue.text(`${getfinalheight}%`);
            getprogress.css({
                "background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
            })
        });
    // End Progress















