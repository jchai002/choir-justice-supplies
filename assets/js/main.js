/**
 * Ooma Main JavaScript File
 */

 $(function(){

    /**
     * Menu Dropdown
     */
     var $dropmenu = $('.dropmenu'),
     $dropdown = $('.dropdown');

     $dropmenu.on('mouseenter', function(){
        $(this).find($dropdown).fadeIn();
        $(this).find(' > a ').addClass('hover');
    });

     $dropmenu.on('mouseleave', function(){
        $(this).find($dropdown).fadeOut();
        $(this).find(' > a ').removeClass('hover');
    });


    /**
     * Search Dropdown
     */
     var $searchBtn = $('.searchBtn');

     $('#searchBox').hide();

     $searchBtn.on('click', function(e){
        if( $('#searchBox').hasClass('is-active') ){
            $('#searchBox').fadeOut();
            $(this).removeClass('is-active');
            $('#searchBox').removeClass('is-active');
        }else{
            $('#searchBox').fadeIn();
            $(this).addClass('is-active');
            $('#searchBox').addClass('is-active');
        }
        e.preventDefault();
    });

     $(document).mouseup(function (e) {
        var $searchbox = $(".searchSite");

        if (!$searchbox.is(e.target) && $searchbox.has(e.target).length === 0) {
            $('#searchBox').fadeOut(); //Close Open panel
            $('#searchBox').removeClass("is-active");
            $('.searchBtn').removeClass("is-active");
        }
    });


    /**
     * Scrolling Banners
     */
     $('.slick').slick();

    //Banner Title for Mobile
    var $banner = $('.banner');

    //Remove top margin if first banner
    $banner.slice(0, 1).css({
        "margin-top" : "0"
    });

    $banner.each(function(){
        var bannerTitle = $(this).find('.content .title').html();
        var mobileTitle = $(this).find('.mobileTitle');
        $(this).find(mobileTitle).html(bannerTitle);

        var bannerIntro = $(this).find('.content .intro').html();
        var mobileIntro = $(this).find('.mobileIntro');
        $(this).find(mobileIntro).html(bannerIntro);

    });

    //Moving 'inline' Banner images to 'background'
    $bannerImage = $('.bannerWrap');
    if( $bannerImage.length > 0 ){
    	$bannerImage.each(function(){
          var bgImage = $("img.bannerBg", this).attr("src");
          $(this).css({
           'background-image' : 'url(' + bgImage + ')',
           'background-repeat' : 'no-repeat'
       });
      });
    }

    /**
     * Compare Button Functionality
     */
     var $compareBtn = $('.compare');

     $compareBtn.on('click', function(e){
        var $compareContent = $(this).parent().next('.compare_Content');

        if( $compareContent.css('display') == 'none' ){
            $compareBtn.addClass('hide').text('Hide Features');
            $compareContent.slideDown();
        } else {
            $compareBtn.removeClass('hide').text('Compare');
            $compareContent.slideUp();
        }
        e.preventDefault();
    });

    /**
     * Simple Show/Hide
     */
     var $expand = $('.expand'),
     $expandDesc = $('.expandDesc');

     $expand.on('click', function(){
        $(this).next().slideToggle();
    });

    /**
     * Local Taxes Table Expand
     */
     var $taxDetails = $('.taxDetails'),
     $localTable = $('.localTaxesDetails'),
     $localTaxSum = $('.localTaxSum');

     $taxDetails.on('click', function(e){
        if( $(this).hasClass('showTable') ) {
            $(this).removeClass('showTable');
            $('.localTaxSum').css({
                'visibility' : 'visible'
            });
            $localTable.slideUp();
        } else {
            $(this).addClass('showTable');
            $('.localTaxSum').css({
                'visibility' : 'hidden'
            });
            $localTable.slideDown();
        }

        e.preventDefault();
    });
 });

$(document).ready(function() {
    var InitialListItems = 3;

    $('.facetvalues').each(function(){
        if ($(this).find('li').length) {
            $(this).find("li:gt("+(InitialListItems-1)+")").hide();
        }
    });

    $('.slidermenu-fbr').html('View All');
    $('.slidermenu-fbr').on('click',function() {
        if($(this).hasClass('open')){
            $(this).siblings('.facetvalues').find("li:gt("+(InitialListItems-1)+")").slideUp();
            $(this).removeClass('open');
            $(this).html('View All');
        }
        else{
            $(this).siblings('.facetvalues').find('li').slideDown();
            $(this).addClass('open');
            $(this).html('View Less');
        }
    });

    $('.tab-bar a').click(function(e) {
        $('a').removeClass('active');
        $(this).addClass('active');
    });

    //  Active Class For Left Nav
    var anchor = $('.panel-body a[href="/' + location.pathname.split("/")[1] + '"]');
    if(anchor == '.panel-body a[href^=""]' )
    {
        anchor.removeClass('active');
    }
    else
    {
        anchor.addClass('active');
    }

    // language popup
    if (window.location.pathname == '/') {
      var rootpath = Cookies.get('rootpath');
      if (rootpath) {
        window.location = "/"+rootpath;
      } else {
        $('#choose-locale').addClass('md-show');
      }
    }

    if (window.location.pathname == '/us/en/') {
      Cookies.set('rootpath', 'us/en/');
    }

    if (window.location.pathname == '/au/en/') {
      Cookies.set('rootpath', 'au/en/');
    }

    if (window.location.pathname == '/fr/en/') {
      Cookies.set('rootpath', 'fr/en/');
    }

    if (window.location.pathname == '/fr/fr/') {
      Cookies.set('rootpath', 'fr/fr/');
    }

});
