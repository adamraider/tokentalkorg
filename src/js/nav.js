$('.global-nav__toggle').on('click', function (e) {
  var $nav = $('#global-nav__mobile');

  if ($nav.hasClass('active')) {
    $nav.removeClass('active');
  } else {
    $nav.addClass('active');
  }

  console.log('lol');
});