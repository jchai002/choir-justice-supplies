$(function(){

    /**
     * Equalize Height
     */
    $('.product-list').equalize({
        children: '.product-list_item',
        reset: true
    });

    // re-equalize on resize
    $(window).smartresize(function(){
        $('.product-list').equalize({
            reset:true,
            children:'.product-list_item'
        });
    });

    /**
     * Feature Wrap - Selecting First Element
     */
    $featuredWrap = $('.featuredWrap');

    $(window).on('load resize', function(){
        var $width = $(window).width();
        if( $width < 861 ) {
            $featuredWrap.slice(0, 1).css({
                "margin-top" : "40px"
            });
        } else {
            $featuredWrap.slice(0, 1).css({
                "margin-top" : 0
            });
        }
    });

    /**
     * CTA Module
     */
    $('.cta:last-child').css({
        "border-bottom" : 0
    });

    //Large Promos
    $('.inner-five:nth-child(2n+1) .promoWrap').addClass('first');

    /**
     * Promo Images
     */
    $('.fullImagePromo').each(function(){
        var bgFullPromoImage = $('img', this).attr('src');
        $(this).css({
            'background-image' : 'url(' + bgFullPromoImage + ')',
            'background-repeat' : 'no-repeat'
        });
    });

    /**
     * Small Banner
     */
    $('.smallBanner').each(function(){
        var smBg = $('img.smBannerImage', this).attr('src');
        $(this).css({
            'background-image' : 'url(' + smBg + ')',
            'background-repeat' : 'no-repeat',
            'background-position' : 'right bottom'
        });
    });

    /**
     * Small Promos
     */
    $('.promoWrap.small').each(function(){
        var bgpromo = $('img.bgpromo', this).attr('src');
        $(this).css({
            'background-image' : 'url(' + bgpromo + ')',
            'background-repeat' : 'no-repeat'
        });
    });

    /**
     * Big Promos
     */
    $('.promoWrap.big').each(function(){
        var bgpromo = $('img.bgpromo', this).attr('src');
        $(this).css({
            'background-image' : 'url(' + bgpromo + ')',
            'background-repeat' : 'no-repeat'
        });
    });

    /**
     * Gray Box Promo box  (Side Bar Promo)
     */
    $('.promoWrap.sidePromo').each(function(){
        var promoBgImage = $("img.sidePromoBg", this).attr("src");
        $(this).css({
            'background-image' : 'url(' + promoBgImage + ')',
            'background-repeat' : 'no-repeat',
            'background-position' : 'bottom right'
        });
    });

    /**
     * Center Flex Layout
     *      - Count the number of div
     *      - Add class for 3 or 4 column layouts
     */
    $('.centerFlex').each(function(){

        var $flexItem = $(this).find('.item'),
            $flexItem_Count = $(this).children().length;

        if( $flexItem_Count == 4 ){
            $flexItem.addClass('four');
        } else if( $flexItem_Count == 3 ) {
            $flexItem.addClass('three');
        } else if( $flexItem_Count == 2 ) {
            $flexItem.addClass('two');
        } else {
            $flexItem.addClass('one');
        }

    });


    /**
     * Add Cleaner after every 2 Featured List items
     */

    /**
     * Compare Table
     */
    $('table.compare_TableDetails td:nth-child(1)').addClass('first');
    $('table.compare_TableDetails td:nth-child(2)').addClass('basic');
    $('table.compare_TableDetails td:nth-child(3)').addClass('premier');

    $('table.compare_TableDetails tr:odd').addClass('odd');

    /**
     * Product List
     */
    $('.product-list').find('.product-list_item:first').addClass('first');
    $('.product-list').find('.product-list_item:last').addClass('last');

});

$(document).ready(function() {
    function toggleChevron(e) {
        $('.panel-heading').addClass('icon-arrow');
        $('.collapse.in').parents('.panel').find('.panel-heading').removeClass('icon-arrow');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);
});