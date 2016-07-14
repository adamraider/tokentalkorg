// register modal component
Vue.component('modal', {
  template: '#modal-template',
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true    
    }
  }
})

// start app
new Vue({
  el: '#app',
  data: {
    showModal: false
  }
})

$('.global-nav__toggle').on('click', function (e) {
  var $nav = $('#global-nav__mobile');

  if ($nav.hasClass('active')) {
    $nav.removeClass('active');
  } else {
    $nav.addClass('active');
  }

  console.log('lol');
});