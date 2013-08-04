/**
 * Main
 * ====
 * This is the main js initialiser for the page
 * it is triggered by the data-main attribute on the
 * require script tag.
 * <script data-main="/js/main" src="/lib/require.js"></script>
 * for more information see <http://requirejs.org>
*/
/*jshint laxcomma:true */
/*global define,require,_ga, Modernizr */
(function(){
    'use strict';

    var options = { 
        paths: { 
            jquery: '../lib/jquery-core',
            lib: '../lib', 
            'jquery-plugin': '../lib/jquery-plugins'
        } 
    }
    ;
    require(options, 
            [ 
                'jquery/core'
            ], 
            function($) {

                var $window = $(window),
                    $body = $('body'), 
                    $html = $('html'), 
                    windowWidth  = $window.width(),
                    isTouch = Modernizr.touch;
                

                $.fn.hasAnyClass = function() {
                    var i;
                    for (i = 0; i < arguments.length; i+=1) {
                        if (this.hasClass(arguments[i])) {
                            return true;
                        }
                    }
                    return false;
                };
                window.log = window.log || function(message){
                    if (window.console && window.console.log){
                        window.console.log(message);
                    }
                };










            });
}());

