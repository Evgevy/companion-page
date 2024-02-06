
$(document).ready(function(){
    $(".sidebar__name").click(function(){
        if (window.innerWidth >= 850 || window.innerWidth <= 610) {
            $(this).siblings(".sidebar__list ").toggleClass("sidebar__list--open")
            $(this).siblings(".sidebar__options ").toggleClass("sidebar__options--open")
            $(this).siblings(".sidebar__arrow").toggleClass("sidebar__arrow--open")

        } else {
            $(this).siblings(".sidebar__list ").removeClass("sidebar__list--open")
            $(this).siblings(".sidebar__options ").removeClass("sidebar__options--open")
            $(this).siblings(".sidebar__arrow").removeClass("sidebar__arrow--open")

        }
        
    })
})


let sliderRange = document.querySelector('.sidebar__range');
let sliderValue = document.querySelector('.sidebar__inner-value');

sliderRange.addEventListener('input', function() {
  sliderValue.textContent = sliderRange.value;
});
