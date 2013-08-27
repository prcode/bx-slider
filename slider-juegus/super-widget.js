(function() {

// Localize jQuery variable
var jQuery;


/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.6.0') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "http://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);

    // Call our main function
    main(); 
}

/******** Our main function ********/
function main() { 
    jQuery(document).ready(function($) { 

        function ghostCarousel() {
        
        var v = $(window).width();
        var w = $(section).width();
        var c = (w * $(section).length - v) / 2;
        
        $(content).width(w * $(section).length);
        $(content).css('margin-left', -c);

        $('#gcNavRight').click(function(e) {
            e.preventDefault();
            if ($(content).is(':animated')) return false;
            $(content).animate({ marginLeft: '-=' +w }, 500, function() {
                var first = $(section).eq(0);
                $(section).eq(0).remove();
                $(this).animate({ marginLeft: '+=' +w }, 0);
                $(this).append(first);
            });
        });
        $('#gcNavLeft').click(function(e) {
            e.preventDefault();
            if ($(content).is(':animated')) return false;
            $(content).animate({ marginLeft: '+=' +w }, 500, function() {
                var end = $(section).length - 1;
                var last = $(section).eq(end);
                $(section).eq(end).remove();
                $(this).animate({ marginLeft: '-=' +w }, 0);
                $(this).prepend(last);
            });
        });
        
    }
    
    
    $(window).resize(function() {
        var v = $(window).width();
        var w = $(section).width();
        var c = (w * $(section).length - v) / 2;
        $(content).css('margin-left', -c);
    });  
    


        /******* Load CSS *******/
        var css_link = $("<link>", { 
            rel: "stylesheet", 
            type: "text/css", 
            href: "http://prcode.github.io/slider-juegus/style-widget.css" 
        });
        css_link.appendTo('head');          

        /******* Load HTML *******/
        var jsonp_url = "http://jueg.us/postssliderhorizontal/?callback=?";
        $.getJSON(jsonp_url, function(data) {
          $('#slider-de-juegos').html(data.html);

            ghostCarousel();

        });
    });
}

var content = '#ghostCarousel #content';
var section = content + ' > div';
 


})(); // We call our anonymous function immediately