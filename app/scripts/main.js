'use strict';

(function() {

  function getContent(ID) {
    var url = 'partials/' + ID + '.part';
    $.get(url)
      .success(function(data) {
        $('#dynamicContent').html(data);
      })
      .error(function() {
        $('#dynamicContent').html('<p class="error"> page ' + ID + ' missing </p>');
      });
  }

  function navigate() {
    // strip the hash from the name
    var ID = location.hash.substr(1);
    console.log(ID);

    // set the active class for the proper link
    $('#navbar a').removeClass('active');
    console.log('navbar a[href=#' + ID + ']');
    $('#navbar a[href="#' + ID + '"]').addClass('active');

    // load the partial associated with ID
    getContent(ID);
  }

  // default to the #home route
  if (!location.hash) {
    location.hash = '#home';
  }

  // respond to hashchange event
  $(window).on('hashchange', navigate);
})();
