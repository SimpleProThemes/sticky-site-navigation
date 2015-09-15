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
      
      var nav_h = $('.site-navigation').innerHeight();        
      if( $('body').hasClass('home') && $('#home-top').length ) {
        $('#home-top').css({'margin-top': nav_h + 'px'});
      } else if( $('body').hasClass('home') && ( ! $('#home-top').length ) && $('#home-middle').length ) {
        $('#home-middle').css({'margin-top': nav_h + 'px'});
      } else {
        $('.site-inner').css({'margin-top': nav_h + 'px'});
      }
      
    } else {
    
      $('body').removeClass('sticky-nav');
      if( $('#wpadminbar').length ) { $('.site-navigation').removeAttr('style'); }
      
      if( $('body').hasClass('home') && $('#home-top').length ) {        
        $('#home-top').removeAttr('style');                              
      } else if( $('body').hasClass('home') && ( ! $('#home-top').length ) && $('#home-middle').length ) {        
        $('#home-middle').removeAttr('style');                                                                   
      } else {        
        $('.site-inner').removeAttr('style');
      }
      
    }
  });
});
