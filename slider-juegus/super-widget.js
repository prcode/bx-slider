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
            href: "http://prcode.github.io/bx-slider/slider-juegus/style-widget.css" 
        });
        css_link.appendTo('head');          
    
        json = json = '{"html": "<div id=\"ghostCarousel\">\n    <div id=\"content\"><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/tennis-stars-cup\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh5.googleusercontent.com\/-47WJ1PL50Ds\/UhtJwhqkHRI\/AAAAAAAAC68\/kO0F_QHCiWE\/w148-h108-no\/tennis-stars-cup.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/minotaur-labyrinth\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh5.googleusercontent.com\/-wGx4go-2vzw\/UhtdySY3CII\/AAAAAAAAC7Y\/WV8dmWSBpYY\/w148-h108-no\/Minotaur+Labyrinth.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/specter-spelunker-shrinks\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh5.googleusercontent.com\/-Dxkk7D1VaUg\/UhvKx4X528I\/AAAAAAAAC9k\/9vhXMgBYOSM\/w148-h108-no\/Specter+Spelunker+Shrinks.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/ion-drift-epsilon\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh3.googleusercontent.com\/-jXgmn6ZuIu8\/UhtyrejPJaI\/AAAAAAAAC70\/qmzJBJ0u99c\/w148-h108-no\/Ion+Drift+Epsilon.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/tug-the-table\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh5.googleusercontent.com\/-OMRXIIcjWmw\/Uhu_8P0E2WI\/AAAAAAAAC9E\/6croDDuUDow\/w148-h108-no\/Tug+the+Table.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/brain-ball-runaway\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh5.googleusercontent.com\/-KWPaJgHucYs\/Uhu8v__n1vI\/AAAAAAAAC8s\/wwBf6JSz_co\/w148-h108-no\/Brain+Ball+Runaway.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/grokion-inception\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh5.googleusercontent.com\/-uCqJk2jwEN4\/UhvPV4GLthI\/AAAAAAAAC98\/61Mz_4xy_vE\/w148-h108-no\/Grokion+Inception.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/billiards\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh5.googleusercontent.com\/-7aH0Nqtc4Dw\/Uht5UzSB4QI\/AAAAAAAAC8Q\/_X7cuKS3GLE\/w148-h108-no\/Billiards.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/jet-ski-racer\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh5.googleusercontent.com\/-CgcyNWgpKOo\/UhYivmQpp7I\/AAAAAAAACpo\/fyWFr_ffOEU\/w150-h110-no\/jetskiracer.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/robo-rampage\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh6.googleusercontent.com\/-AgDbj29g11c\/UhZyUwYZPKI\/AAAAAAAACyU\/52Th1lxWQU4\/w148-h108-no\/roborampage.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/stickman\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh3.googleusercontent.com\/-mdKBNXs5mE0\/UhZvwc3YnXI\/AAAAAAAACx4\/u7HccOByhjw\/w148-h108-no\/stickman.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/hong-kong-ninja\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh3.googleusercontent.com\/-fUVR8U7wmKQ\/UhZt8FCtgGI\/AAAAAAAACxY\/LtNhYOMoaLs\/w148-h108-no\/hongkongninja2.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/commando-3\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh5.googleusercontent.com\/-iahBhTaitS8\/UhZsITHeDJI\/AAAAAAAACxE\/QwNoQZmXYHo\/w148-h108-no\/commando3v3.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/boxo\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh5.googleusercontent.com\/-e35p5wwRmIw\/UhZpSV52cbI\/AAAAAAAACwQ\/Wp-h-YeEZLM\/w148-h108-no\/boxo.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/hambo\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh3.googleusercontent.com\/-BpOZBc7547s\/UhZjNDK3ROI\/AAAAAAAACvU\/csrpvn0XxOg\/w148-h108-no\/hambo.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/ores\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh5.googleusercontent.com\/-eg2yKx9XojI\/UhZdfZXiicI\/AAAAAAAACuA\/pMHuDTwFx0A\/w148-h108-no\/ores.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/bloxorz\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh4.googleusercontent.com\/-tByRGu-zPAU\/UhZcXrrex-I\/AAAAAAAACts\/f-f0uL1PwjM\/w148-h108-no\/bloxorz20.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/free-running-2\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh3.googleusercontent.com\/-2s23MK5jFmE\/UhY1ndQstxI\/AAAAAAAACr8\/WVt8RWnIL7E\/w150-h110-no\/freerunning2V2.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/gokartgo-nitro\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh6.googleusercontent.com\/-FbIkB3Zd6Rw\/UhYroqMs9aI\/AAAAAAAACrA\/NTul3WbrrQE\/w148-h108-no\/gokartgonitrov2.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div><div class=\"block\">\n                    <a target=\"_blank\" href=\"http:\/\/jueg.us\/motocross-nitro\/\">\n                        <span class=\"icon-wrap\">\n                            <img src=\"https:\/\/lh6.googleusercontent.com\/-SrnaLbpNvvw\/UhYnD_J9PNI\/AAAAAAAACqg\/4UoUsJuL4v8\/w148-h108-no\/motocrossnitro.jpg\" \/>\n                        <\/span>\n                    <\/a>\n                <\/div>\n<\/div>\n    \n<\/div>\n\n<div id=\"gcNavRight\">&nbsp;<\/div>\n<div id=\"gcNavLeft\">&nbsp;<\/div>\n\n" } ';
        data = $.parseJSON(json);
        $('#slider-de-juegos').html(data.html);
        ghostCarousel();
        /******* Load HTML ******
        var jsonp_url = "http://jueg.us/postssliderhorizontal/?callback=?";
        $.getJSON(jsonp_url, function(data) {
          $('#slider-de-juegos').html(data.html);

            ghostCarousel();

        });*/
    });
}

var content = '#ghostCarousel #content';
var section = content + ' > div';
 


})(); // We call our anonymous function immediately