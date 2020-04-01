(function() {
  'use strict';
  var show = document.getElementById('show');
  var main = document.getElementById('main');

  show.addEventListener('click', function () {
    main.className = main.className === 'menu-open' ? '' : 'menu-open';
  });
})();
