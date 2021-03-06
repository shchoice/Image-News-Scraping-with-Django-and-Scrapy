(function (window, document){
    'use strict';

   const $toggles = document.querySelectorAll('.toggle');
   const $toggleBtn = document.getElementById('toggle-btn');

   $toggleBtn.addEventListener('click', function(){
       toogleElements();
   });

   window.addEventListener('resize', function() {
       if (window.innerWidth > 1024) {
           // Off toggle element
           offElements();
       }
   });

   function toogleElements() {
       [].forEach.call($toggles, function(toggle) {
           toggle.classList.toggle('on');
       });
   }

   function offElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove('on');
        });
   }
})(window, document)