// $(document).ready(function(){

//     $("#burger-nav").on("click", function(){

//         $("header nav ul").toggleClass("open");

//     });

// });


document.addEventListener("DOMContentLoaded", function(){
    var burgerNav = document.querySelector('#burger-nav');
    if (burgerNav !== null) {
        burgerNav.addEventListener('click', function() {
        //   document.querySelector('#navigation-list-wrapper').classList.toggle('open');
            var navigationListWrapper = document.querySelector('#navigation-list-wrapper');
            if (navigationListWrapper !== null) {
                navigationListWrapper.classList.toggle('open');
            }


        });
    }

});
