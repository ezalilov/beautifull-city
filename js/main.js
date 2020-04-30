$(document).ready(() => {
   // $('.content__item').click(function(event) {
   //    $(this).toggleClass('active')
   //    console.log(event)

// spoiler service
   $('.content__item').click(function(event) {
      $(this).toggleClass('active').next().slideToggle(300) 
      // $(this).toggleClass('active').children('.content-text-wrap').children('.content-desc').slideToggle(300)
      // console.log($(this).attr("id"));
      //children('.content-text-wrap').children('.content-desc')
   })

// feedback
   $('form').submit(function () {
      var formID = $(this).attr('id'); // Получение ID формы
      var formNm = $('#' + formID);
      $.ajax({
          type: 'POST',
          url: './php/feedback.php', // Обработчик формы отправки
          data: formNm.serialize(),
          success: function (data) {
              // Вывод текста результата отправки в текущей форме
              $(formNm).html(data);
          }
      });
      return false;
  });

// menu burger   
   $('.header__burger').click((e) => {
      $('.header__burger,.header__menu').toggleClass('active')
      $('body').toggleClass('lock')
   })
   $('.header__link').click((e) => {
      $('.header__burger,.header__menu').toggleClass('active')
      $('body').toggleClass('lock')
   })
   $(window).scroll(function() {
      if($(this).scrollTop() >= $('.header__top').height()) {
          $('.header__nav-wrap').addClass('sticky');
      } else{
          $('.header__nav-wrap').removeClass('sticky');
      }
  });
   
// slider
//   $('.slider-content').slick({
//    variableWidth: true,
//   })

   //  $('.service-slider').slick({
      //  slide: '.service-slider__item',
      //  slidesToShow: 2,
      //  arrows: false,
      //  asNavFor: '.service-content'
   //  });
      // $('.slider-content').slick({
      //    rtl: true,
      //    variableWidth: true,
      //       })
   
// let navNodes = $('.slider-nav')
// $('.slider-for').each(function(i, node) {
//    let listNodeUniqueClass = 'slider-for-' + i
//    $(node).addClass(listNodeUniqueClass)
//    let navNodeUniqueClass = 'slider-nav-' + i
//    navNodes.eq(i).addClass(navNodeUniqueClass)

//    let listSelector = '.' + listNodeUniqueClass
//    let navSelector = '.' + navNodeUniqueClass
//    console.log({navSelector, listSelector});  
//    $(listSelector).slick({
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		arrows: false,
// 		fade: true,
// 		asNavFor: navSelector,
// 	});
// 	$(navSelector).slick({
//       slide: '.service-slider__item',
// 		slidesToShow: 6,
// 		slidesToScroll: 1,
// 		asNavFor: listSelector,
// 		// arrows: true,
// 		centerPadding: '0',
//       focusOnSelect: true,
//    })
// })

    
//    $('.service-content').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    arrows: false,
//    fade: true,
//    asNavFor: '.slider-nav'

//  });
//  $('.slider-nav').slick({
//    slidesToShow: 3,
//    slidesToScroll: 1,
//    asNavFor: '.slider-for',
//    dots: true,
//    focusOnSelect: true
//  });

})


!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready