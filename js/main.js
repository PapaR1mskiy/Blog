$('#js-toggle-nav').click(function() {
	$('#js-toggle-nav-wrap').toggleClass('active')
});


/**
 * Filters
 */
$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
});

$('#filters li').click(function(){

  //Робимо активною кнопку
  $('#filters li').removeClass('active');
  $(this).addClass('active');

  //Відбираємо значення категорії в кнопки
  var selector = $(this).data('filter');

  $('.grid').isotope({
    filter: selector,
  });
});
























// const toggleNav = document.getElementById('js-toggle-nav');

// toggleNav.addEventListener('click', function() {

// 	const nav = document.getElementById('js-toggle-nav-wrap');

// 	if (nav.classList.contains("active")){
// 		nav.classList.remove("active");
// 	} else {
// 		nav.classList.add("active");
// 	}

// });