$(document).ready(function() {

    $('#sidebar').affix({
      offset: {
        top: 150,
        bottom: function () {
            return (this.bottom = $('footer').outerHeight(true) + 15)
        }
      }
    });

    var $body   = $(document.body);

    $body.scrollspy({
    	target: '#sidebar',
    	offset: 5
    });

    var toggleSub = function (){
      if ( $('.col-sm-4').width() == 220 ) {
            $('.actions #mc-embedded-subscribe').val('>');
        }
        else {
            $('.actions #mc-embedded-subscribe').val('Subscribe');
        }  
    }
    toggleSub();
    $(window).resize(toggleSub);

    /* Carousel */
    $("#main-carousel").owlCarousel({
    		
    		items : 1,
    		itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
    responsiveRefreshRate : 100,

    // Most important owl features
    itemsCustom : false,
    itemsTabletSmall: false,
    singleItem : false,
    itemsScaleUp : false,

    //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    //Autoplay
    autoPlay : false,
    stopOnHover : false,

    // Navigation
    navigation : false,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,

    //Pagination
    pagination : true,
    paginationNumbers: false,

    // Responsive 
    responsive: true,
    responsiveBaseWidth: window,

    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",

    //Lazy load
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",

    //Auto height
    autoHeight : false,

    //JSON 
    jsonPath : false, 
    jsonSuccess : false,

    //Mouse Events
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,

    //Transitions
    transitionStyle : false,

    // Other
    addClassActive : false,

    //Callbacks
    beforeUpdate : false,
    afterUpdate : false,
    beforeInit: false, 
    afterInit: false, 
    beforeMove: false, 
    afterMove: false,
    afterAction: false,
    startDragging : false,
    afterLazyLoad : false

    });

    /* hellobar */
    $(".hellobar").delay(500).slideDown();

});