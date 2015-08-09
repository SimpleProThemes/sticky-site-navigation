jQuery(document).ready(function($) {
  /* ===================================
   * Sticky Nav   
   * =================================== */
    var $header_bar = $site_header = $wpadminbar = 0;
    if( $('.site-top').length ) { $header_bar = $('.site-top').innerHeight(); }
    if( $('.site-header').length ) { $site_header = $('.site-header').innerHeight(); }
    if( $('#wpadminbar').length ) { $wpadminbar = $('#wpadminbar').innerHeight(); }
    $(window).scroll(function() {
      if ( $(window).scrollTop() > ( $site_header + $header_bar + $wpadminbar ) ) {
        $('body').addClass('sticky-nav');
        if( $('#wpadminbar').length ) { $('.site-navigation').css({'margin-top': $wpadminbar + 'px'}); }
      } else {
        $('body').removeClass('sticky-nav');
        if( $('#wpadminbar').length ) { $('.site-navigation').removeAttr('style'); }
      }
    });
});
