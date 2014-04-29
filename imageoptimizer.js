
 // created bye anish
(function ($) {

    $.fn.imageoptim = function (options) {

        // Establish our default settings
        var settings = $.extend({
            fillcrop: 'fill',
        }, options);

        return this.each(function () {

            image = $(this);


            imgHeight = image[0].naturalHeight;
            imgWidth = image[0].naturalWidth;
            parentheight = image.parent().height();
            parentwidth = image.parent().width();
            scalefactWidth = parentwidth / imgWidth;
            scalefactHeight = parentheight / imgHeight;
            if (settings.fillcrop == "fill") {



                if (scalefactWidth < scalefactHeight) {

                    scaleimageWidth = imgWidth * scalefactWidth;
                    scaleimageHeight = imgHeight * scalefactWidth;
                    centre = (parentheight - scaleimageHeight) / 2
                    image.css({
                        'width': scaleimageWidth,
                        'height': scaleimageHeight,
                        "marginTop": centre,
                        "position": "absolute"
                    });

                } else if (scalefactWidth > scalefactHeight) {

                    scaleimageWidth = imgWidth * scalefactHeight;



                    scaleimageHeight = imgHeight * scalefactHeight;
                    centre = (parentwidth - scaleimageWidth) / 2
                    image.css({
                        'width': scaleimageWidth,
                        'height': scaleimageHeight,
                        "marginLeft": centre,
                        "position": "absolute"
                    });


                }
            } else if (settings.fillcrop == "crop") {

                $(this).parent().css({
                    'overflow': 'hidden',
                });

                if (scalefactWidth > scalefactHeight) {

                    scaleimageWidth = imgWidth * scalefactWidth;


                    scaleimageHeight = imgHeight * scalefactWidth;


                    centre = (parentheight - scaleimageHeight) / 2

                    image.css({
                        'width': scaleimageWidth,
                        'height': scaleimageHeight,
                        "marginTop": centre,
                    });

                } else if (scalefactWidth < scalefactHeight) {

                    var scaleimageWidths = imgWidth * scalefactHeight;



                    var scaleimageHeights = imgHeight * scalefactHeight;

                    centre = (parentwidth - scaleimageWidths) / 2


                  
                    image.css({
                        'width': scaleimageWidths,
                        'height': scaleimageHeights,
                        "marginLeft": centre,
                    });

                }

            }
        });

    }

}(jQuery));