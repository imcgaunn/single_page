/*
 * File: app/scripts/main.js
 * 91.461 Assignment 7:
 * Ian McGaunn, UMass Lowell Computer Science, imcgaunn@cs.uml.edu
 * Copyright (c) 2014 by Ian McGaunn. All rights reserved. May be freely
 * copied or excerpted for educational purposes with credit to the author.
 * updated by IDM on 11/6/2014
 */

'use strict';

(function() {

  // use jquery AJAX to fetch partial corresponding
  // with param: ID and add it to the #dynamicContent div
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

  // default to the #about route
  if (!location.hash) {
    location.hash = '#about';
  }

  // respond to hashchange event
  $(window).on('hashchange', navigate);
})();
