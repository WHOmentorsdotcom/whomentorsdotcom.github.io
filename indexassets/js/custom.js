

/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {

        main_fun:function() {
            $(window).load(function () {
                $(".loader").fadeOut("slow");
            });
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'indexassets/img/1.jpg', fade: 1000, delay: 9000 }, //CHANGE THESE IMAGES WITH YOUR ORIGINAL IMAGES
                      { src: 'indexassets/img/2.jpg', fade: 1000, delay: 9000 }, //THESE IMAGES ARE FOR DEMO PURPOSE ONLY YOU, CAN NOT USE THEM WITHOUT AUTHORS PERMISSION
                       { src: 'indexassets/img/3.jpg', fade: 1000, delay: 9000 }, //SEE DOCUMENTATION FOR ORIGINAL URLs/LINKs OF IMAGES
                     { src: 'indexassets/img/4.jpg', fade: 1000, delay: 9000 },
                     { src: 'indexassets/img/5.jpg', fade: 1000, delay: 9000 },
                     { src: 'indexassets/img/6.jpg', fade: 1000, delay: 9000 },
                     { src: 'indexassets/img/7.jpg', fade: 1000, delay: 9000 },
                     { src: 'indexassets/img/8.jpg', fade: 1000, delay: 9000 },
                     { src: 'indexassets/img/9.jpg', fade: 1000, delay: 9000 },

                    ]
                })('overlay', {
                    /** SLIDESHOW OVERLAY IMAGE **/
                    src: 'indexassets/plugins/vegas/overlays/15.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                });

            });

            $(function () {
                var $header = $("#headLine");
                var header = ['RESEARCH', '24/7', 'CREATE', '24/7', 'INNOVATE', '24/7', 'TRAIN', '24/7', 'WORK', '24/7']; // CHANGE TEXT HERE TO YOUR TEXT , YOU CAN USE MANY WORDS SEPRATED BY , 

                var position = -1;

                !function loop() {
                    position = (position + 1) % header.length;
                    $header
                        .html(header[position])
                        .fadeIn(1000)
                        .delay(1000)
                        .fadeOut(1000, loop);
                }();
            });

        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



