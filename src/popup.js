(function($) {



    $.fn.centerPopup = function(options){
        var class_ele = $(this).selector;
        var ele = jQuery('<div id="overlay"><div id="popup_div" style=""><div id="render_content"></div><div class="close-btn-wrapper" style=" "><span class="close_me" style=" ">Close</span></div></div><div/>');
        if($('#overlay').length == 0){
            $(ele).appendTo('body');
        }

        $.fn.centerPopup.defaultOptions = {
            'width'  : '50%',
            'height' : '50%',
            'left'   : '50%',
            'top'    : '50%',
            'showCloseButton' : true
        }

        var options = $.extend({},$.fn.centerPopup.defaultOptions,options);

        if(options.showCloseButton == false){
            $(".close-btn-wrapper").addClass('hideElement');
        }
        $(class_ele).on('click',function(e){
            e.preventDefault();
            $("#overlay").addClass('popup_div_background');
            $("#popup_div").fadeIn().center();
            $("#render_content").addClass('render_div_style');
            if($.trim($("#render_content").html())===''){
                $('#render_content').load($(class_ele).attr('href'));
            }

        });

        $(".close_me").click(function(){
            $("#popup_div").fadeOut();
            $("#overlay").removeClass('popup_div_background');
        });

        $.fn.center = function () {
            this.addClass('popup_div_style');
            this.css(options);
            this.css({
                'margin-left': - this.width() / 2 + 'px',
                'margin-top': - this.height() / 2 + 'px'
            });
        }




    };





})(jQuery);
