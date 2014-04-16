(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
  $.fn.giftOfThePagi = function(options) {

    // Some defaults
    var DEFAULTS = {
      prevButtonText: 'Prev',
      nextButtonText: 'Next'
    };

    // Merge runtime options with defaults
    options = $.extend({}, DEFAULTS, options);

    // Placeholders for exported methods
    $.fn.giftOfThePagi.goToPreviousItem = function()
    {
    };

    $.fn.giftOfThePagi.goToNextItem = function()
    {
    };

    var PAGINATION_CONTROLS = '<ul class="pagi-pagination-controls">' +
        '<li class="prev-paginate"><a class="btn btn-default" href="#">' +
          options.prevButtonText + '</a></li>' +
        '<li class="next-paginate"><a class="btn btn-default" href="#">' +
          options.nextButtonText + '</a></li>' +
      '</ul>';

    return this.each(function() {
      var $element    = $(this);
      var $items      = $element.children('li');
      var $activeItem = $items.first();

      $element.addClass('pagi-paginated-prev-next');

      $element.next('.pagi-pagination-controls').remove();
      $element.after(PAGINATION_CONTROLS);
      $activeItem.addClass('pagi-active-paginated-item');

      $element
        .next('.pagi-pagination-controls')
        .find('.prev-paginate a').on('click', function(e) {
        e.preventDefault();
        paginateToPreviousItem();
      });

      $element
        .next('.pagi-pagination-controls')
        .find('.next-paginate a').on('click', function(e) {
        e.preventDefault();
        paginateToNextItem();
      });

      function paginateToPreviousItem()
      {
        $activeItem.removeClass('pagi-active-paginated-item');

        if ($activeItem.prev().length)
          $activeItem = $activeItem.prev();
        else
          $activeItem = $items.last();

        $activeItem.addClass('pagi-active-paginated-item');
      }

      function paginateToNextItem()
      {
        $activeItem.removeClass('pagi-active-paginated-item');

        if ($activeItem.next().length)
          $activeItem = $activeItem.next();
        else
          $activeItem = $items.first();
        
        $activeItem.addClass('pagi-active-paginated-item');
      }

    });
  };

}));



