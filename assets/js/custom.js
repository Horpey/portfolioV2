window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-V5G3Q07VPE');
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js').then(function() {
//     // console.log("Service Worker Registered");
//   });
// }

var userAgent = navigator.userAgent.toLowerCase();
var supported = /(chrome|firefox)/;

if (supported.test(userAgent.toLowerCase())) {
  var dark = [
    'padding: 20px 5px 16px',
    'background-color: #171718',
    'color: #bc994e'
  ].join(';');

  if (userAgent.indexOf('chrome') > -1) {
    dark += ';';
    dark += [
      'padding: 20px 5px 16px 40px',
      'background-image: url(http://epic.net/img/signature/epic-logo.png)',
      'background-position: 10px 9px',
      'background-repeat: no-repeat',
      'background-size: 26px 30px'
    ].join(';');
  }

  var gold = [
    'padding: 20px 5px 16px',
    'background-color: #bc994e',
    'color: #ffffff'
  ].join(';');

  var spacer = ['background-color: transparent'].join(';');

  var msg =
    '\n\n %c Crafted with ♥︎ by HORPEY %c https://www.horpey.com %c \n\n\n';

  console.log(msg, dark, gold, spacer);
} else if (window.console) {
  console.log('Crafted with love by HORPEY - https://www.horpey.com');
}

const svgPathx = document.querySelectorAll('.pathwayx');
const svgText = anime({
  targets: svgPathx,
  // strokeDashoffset: [anime.setDashoffset, 0],
  strokeDasharray: function(el) {
    return [el.getAttribute('stroke-dasharray'), 300];
  },
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function(el, i) {
    return i * 250;
  },
  direction: 'alternate',
  loop: true
});

// Icon Animate
const navPath = document.querySelectorAll('.navpath');
const navPathDec = anime({
  targets: navPath,
  // strokeDashoffset: [anime.setDashoffset, 0],
  // strokeDashoffset: function(el) {
  //   return [el.getAttribute('stroke-dasharray'), 100];
  // },
  delay: function(el, i) {
    return i * 100;
  },
  direction: 'alternate',
  loop: false,
  autoplay: true,
  endDelay: 1000,
  easing: 'easeInOutSine'
});

document.querySelector('.navlinksvg').onclick = navPathDec.restart;
// Icon Animate

// Icon Animate
const navPath2 = document.querySelectorAll('.navpath2');
const navPathDec2 = anime({
  targets: navPath2,
  // strokeDashoffset: [anime.setDashoffset, 0],
  // strokeDashoffset: function(el) {
  //   return [el.getAttribute('stroke-dasharray'), 100];
  // },
  delay: function(el, i) {
    return i * 100;
  },
  direction: 'alternate',
  loop: false,
  autoplay: true,
  endDelay: 1000,
  easing: 'easeInOutSine'
});

document.querySelector('.navlinksvg2').onclick = navPathDec2.restart;
// Icon Animate

// Icon Animate
const navPath3 = document.querySelectorAll('.navpath3');
const navPathDec3 = anime({
  targets: navPath3,
  // strokeDashoffset: [anime.setDashoffset, 0],
  // strokeDashoffset: function(el) {
  //   return [el.getAttribute('stroke-dasharray'), 100];
  // },
  delay: function(el, i) {
    return i * 100;
  },
  direction: 'alternate',
  loop: false,
  autoplay: true,
  endDelay: 1000,
  easing: 'easeInOutSine'
});

document.querySelector('.navlinksvg3').onclick = navPathDec3.restart;
// Icon Animate

// Icon Animate
const navPath4 = document.querySelectorAll('.navpath4');
const navPathDec4 = anime({
  targets: navPath4,
  // strokeDashoffset: [anime.setDashoffset, 0],
  // strokeDashoffset: function(el) {
  //   return [el.getAttribute('stroke-dasharray'), 100];
  // },
  delay: function(el, i) {
    return i * 100;
  },
  direction: 'alternate',
  loop: false,
  autoplay: true,
  endDelay: 1000,
  easing: 'easeInOutSine'
});

document.querySelector('.navlinksvg4').onclick = navPathDec4.restart;
// Icon Animate

$(window).bind('load', function() {
  // code here
  $('.loading').hide();
  // const svgPath = document.querySelectorAll('.pathway');

  // const svgText = anime({
  //   targets: svgPath,
  //   // strokeDashoffset: [anime.setDashoffset, 0],
  //   strokeDashoffset: function(el) {
  //     return [el.getAttribute('stroke-dashoffset'), 0];
  //   },
  //   strokeDasharray: function(el) {
  //     return [el.getAttribute('stroke-dasharray'), 42];
  //   },
  //   easing: 'easeInOutSine',
  //   duration: 10000,
  //   delay: function(el, i) {
  //     return i * 250;
  //   },
  //   direction: 'alternate',
  //   loop: false
  // });

  //Animated Scroll

  $("a[href^='#']").on('click', function(e) {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top
      },
      1000
    );
  });

  if ($(window.location.hash).length > 0) {
    $('html, body').animate(
      {
        scrollTop: $(window.location.hash).offset().top
      },
      1000
    );
  }
});
