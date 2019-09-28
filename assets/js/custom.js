if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function() {
    // console.log("Service Worker Registered");
  });
}

const svgPathx = document.querySelectorAll('.pathwayx');
const svgText = anime({
  targets: svgPathx,
  strokeDashoffset: [anime.setDashoffset, 0],
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
  strokeDashoffset: [anime.setDashoffset, 0],
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
  strokeDashoffset: [anime.setDashoffset, 0],
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
  strokeDashoffset: [anime.setDashoffset, 0],
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
  strokeDashoffset: [anime.setDashoffset, 0],
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
  const svgPath = document.querySelectorAll('.pathway');

  const svgText = anime({
    targets: svgPath,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) {
      return i * 250;
    },
    direction: 'alternate',
    loop: false
  });

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
