$(function () {

  $('.status__btn').on('click', function () {

    $('.status').addClass('status--close')

  });


  $('.offers__link').on('click', function () {
    $(this).addClass('offers__link--active');
    $(this).parent().addClass('offers__card--active')
  });


  $('.offers__inner').slick({
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    dots: true,
    centerMode: 0,
    arrows: false,
  });

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.header__menu').toggleClass('header__menu--active');
    $('body').toggleClass('disable-scrloll');
  })

  $('.header__menu-link, .user-menu__link').on('click', function () {
    $('.header__menu').removeClass('header__menu--active');
    $('.burger').removeClass('burger--active');
  })

});
