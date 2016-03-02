$(function () {

    $('#pagepiling').pagepiling({

        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'left',
            'tooltips': ['Intro', 'Education', 'Skills', 'Works', 'Contact']
        },

        //event
        onLeave: function(index, nextIndex, direction){
            var $pages = $("#pagepiling").find(".section");
            $($pages[index-1]).find(".animate").removeClass("is-showing");
            $($pages[nextIndex-1]).find(".animate").addClass("is-showing");

            if(index == 3) {
                clearProgress(300);
            }
            if (nextIndex == 3) {
                moveProgressBar(1500);
            }
        },

        afterRender: function(){
            $("#pagepiling").find(".section:first-child .animate").addClass("is-showing");
        }

    });

    $(window).resize(function () {
        moveProgressBar(500);
    });

    clearProgress(1);


    function moveProgressBar(animationLength) {
        var $progressWraps = $(".progress-wrap");

        $progressWraps.each(function () {
            var percent = $(this).data('progress-percent') / 100;
            var progressWrapWidth = $(this).width();
            $(this).find('.progress-bar').stop().animate({
                width: percent * progressWrapWidth
            }, animationLength);
        });
    }

    function clearProgress(animationLength){
        $(".progress-bar").stop().animate({
            width: 0
        }, animationLength);
    }




});
