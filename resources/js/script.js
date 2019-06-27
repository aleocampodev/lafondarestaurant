'use strict';

console.log('Hello webpack 4!');
require('../css/sass/style.scss');

/*import $ from 'jquery';

import 'vendors/js/jquery.waypoints.min.js';
 
const Waypoint=require('waypoint')
$(document).ready( function(){ 

  /*For the sticky naviagtion*/
  /*$('js--section-features').waypoint(function(direction){
      if(direction == "down"){
        $('nav').addClass('sticky');
      }else {
        $('nav').removeClass('sticky');
      }
  },{
        offset:'60px'
  });

  $('js--scroll-to-plans').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
  });

  $('.js--scroll-to-start').click(function(){
    $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
  });*/

  /*Navigation scroll */
/*$(function(){
    $('a[href*=#]:not([href=#])').click(function(){
      if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.lenght ? target : $('[name' + this.hash.slice(1) + ']');
        if(target.length){
          $('html,body').animate({
            scrollTop:target.offset().top
          },1000);
          return false;
        }
      }
    });
  });*/

  /*Animations on scroll */
  /*$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
     offset:'50%'
  });

  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
  },{
    offset:'50%'
  });

  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn');
  },{
    offser:'50%'
  });

  $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse');
  },{
    offset:'50%'
  });*/

  /*Mobile nav*/
  /*$('.js--nav-icon').click(function(){
    var nav= $('js--main-nav');
    var icon= $('js--nav-icon');

    nav.slideToggle(200);

    if(icon.hasClass('ion-navicon-round')){
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });
});*/