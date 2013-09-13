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
        width = $('#slider-de-juegos-v').width();

        $('#gcNavRight, #gcNavLeft').css({ 'left':((width/2)-16)+'px' });
        $('#ghostCarousel').css({'width':$('#slider-de-juegos-v').width(), 'height':$('#slider-de-juegos-v').height()});

        $("div#ghostCarousel div#content div.block").sort(function(){
    return Math.random()*10 > 5 ? 1 : -1;
}).each(function(){
    var $t = $(this),
        color = $t.attr("class");
    $t.appendTo( $t.parent() );
    
});

        var v = $('#slider-de-juegos-v').height();
        var w = $(section).height();
        var c = ((w * $(section).length - v) / 2)-5;
        
        $(content).height(w * $(section).length);
        $(content).css('margin-top', -c);

        $('#gcNavLeft').click(function(e) {
            e.preventDefault();
            if ($(content).is(':animated')) return false;
            $(content).animate({ marginTop: '-=' +w }, 1000, function() {
                var first = $(section).eq(0);
                $(section).eq(0).remove();
                $(this).animate({ marginTop: '+=' +w }, 0);
                $(this).append(first);
            });
        });
        $('#gcNavRight').click(function(e) {
            e.preventDefault();
            if ($(content).is(':animated')) return false;
            $(content).animate({ marginTop: '+=' +w }, 1000, function() {
                var end = $(section).length - 1;
                var last = $(section).eq(end);
                $(section).eq(end).remove();
                $(this).animate({ marginTop: '-=' +w }, 0);
                $(this).prepend(last);
            });
        });
        

        /*
        $('#slider-de-juegos-v a').each(function( index ) {
            $(this).attr('href',$(this).attr('href')+'?ref='+window.location.host+'sjv');
        });*/
    }
    
    
    $(window).resize(function() {
        var v = $(window).height();
        var w = $(section).height();
        var c = (w * $(section).length - v) / 2;
        $(content).css('margin-top', -c);
    });   
    


        /******* Load CSS *******/
        var css_link = $("<link>", { 
            rel: "stylesheet", 
            type: "text/css", 
            href: "http://prcode.github.io/bx-slider/slider-juegus/style-widget-v.css?v=5" 
        });
        css_link.appendTo('head');          
        
        $('#slider-de-juegos-v').hide();
        lestr = '<div id="ghostCarousel" style=""> \
<div id="content"> <div class="block"> \
<a target="_blank" href="http://jueg.us/tennis-stars-cup/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-47WJ1PL50Ds/UhtJwhqkHRI/AAAAAAAAC68/kO0F_QHCiWE/w148-h108-no/tennis-stars-cup.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/minotaur-labyrinth/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-wGx4go-2vzw/UhtdySY3CII/AAAAAAAAC7Y/WV8dmWSBpYY/w148-h108-no/Minotaur+Labyrinth.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/specter-spelunker-shrinks/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-Dxkk7D1VaUg/UhvKx4X528I/AAAAAAAAC9k/9vhXMgBYOSM/w148-h108-no/Specter+Spelunker+Shrinks.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/ion-drift-epsilon/"> \
<span class="icon-wrap"> \
<img src="https://lh3.googleusercontent.com/-jXgmn6ZuIu8/UhtyrejPJaI/AAAAAAAAC70/qmzJBJ0u99c/w148-h108-no/Ion+Drift+Epsilon.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/tug-the-table/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-OMRXIIcjWmw/Uhu_8P0E2WI/AAAAAAAAC9E/6croDDuUDow/w148-h108-no/Tug+the+Table.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/brain-ball-runaway/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-KWPaJgHucYs/Uhu8v__n1vI/AAAAAAAAC8s/wwBf6JSz_co/w148-h108-no/Brain+Ball+Runaway.jpg"/> \
</span> \
</a> \
</div><div class="block"> \
<a target="_blank" href="http://jueg.us/grokion-inception/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-uCqJk2jwEN4/UhvPV4GLthI/AAAAAAAAC98/61Mz_4xy_vE/w148-h108-no/Grokion+Inception.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/billiards/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-7aH0Nqtc4Dw/Uht5UzSB4QI/AAAAAAAAC8Q/_X7cuKS3GLE/w148-h108-no/Billiards.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/jet-ski-racer/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-CgcyNWgpKOo/UhYivmQpp7I/AAAAAAAACpo/fyWFr_ffOEU/w150-h110-no/jetskiracer.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/begone/"> \
<span class="icon-wrap"> \
<img src="https://lh6.googleusercontent.com/-nVAnQLxwulQ/UiefX2wAH2I/AAAAAAAADYo/IeOToTuhhFs/w148-h108-no/Begone.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/hard-rock-racing/"> \
<span class="icon-wrap"> \
<img src="https://lh3.googleusercontent.com/-Gm8vbvZxo44/UiNhHFqceDI/AAAAAAAADLg/w9NvIDPN1-E/w148-h108-no/Hard+Rock+Racing.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/robo-rampage/"> \
<span class="icon-wrap"> \
<img src="https://lh6.googleusercontent.com/-AgDbj29g11c/UhZyUwYZPKI/AAAAAAAACyU/52Th1lxWQU4/w148-h108-no/roborampage.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/transformers/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-JGzUwW-4MfA/Uh_KcbzVZjI/AAAAAAAADF8/wxNvFxIcyyQ/w148-h108-no/transformers.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/counter-strike/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-osY4BcYofic/Uh1AfKWCREI/AAAAAAAADDI/K3fe7LiKYcw/w148-h108-no/counter.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/stickman/"> \
<span class="icon-wrap"> \
<img src="https://lh3.googleusercontent.com/-mdKBNXs5mE0/UhZvwc3YnXI/AAAAAAAACx4/u7HccOByhjw/w148-h108-no/stickman.jpg"/> \
</span> \
</a> \
</div><div class="block"> \
<a target="_blank" href="http://jueg.us/tron-legacy-light-circle/"> \
<span class="icon-wrap"> \
<img src="https://lh3.googleusercontent.com/-EnFFiSMGYXA/Uh_PFmlWPII/AAAAAAAADGU/1hTT2E1Pzvs/w148-h108-no/tron_.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/hong-kong-ninja/"> \
<span class="icon-wrap"> \
<img src="https://lh3.googleusercontent.com/-fUVR8U7wmKQ/UhZt8FCtgGI/AAAAAAAACxY/LtNhYOMoaLs/w148-h108-no/hongkongninja2.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/commando-3/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-iahBhTaitS8/UhZsITHeDJI/AAAAAAAACxE/QwNoQZmXYHo/w148-h108-no/commando3v3.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/boxo/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-e35p5wwRmIw/UhZpSV52cbI/AAAAAAAACwQ/Wp-h-YeEZLM/w148-h108-no/boxo.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/hambo/"> \
<span class="icon-wrap"> \
<img src="https://lh3.googleusercontent.com/-BpOZBc7547s/UhZjNDK3ROI/AAAAAAAACvU/csrpvn0XxOg/w148-h108-no/hambo.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/ores/"> \
<span class="icon-wrap"> \
<img src="https://lh5.googleusercontent.com/-eg2yKx9XojI/UhZdfZXiicI/AAAAAAAACuA/pMHuDTwFx0A/w148-h108-no/ores.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/bloxorz/"> \
<span class="icon-wrap"> \
<img src="https://lh4.googleusercontent.com/-tByRGu-zPAU/UhZcXrrex-I/AAAAAAAACts/f-f0uL1PwjM/w148-h108-no/bloxorz20.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/free-running-2/"> \
<span class="icon-wrap"> \
<img src="https://lh3.googleusercontent.com/-2s23MK5jFmE/UhY1ndQstxI/AAAAAAAACr8/WVt8RWnIL7E/w150-h110-no/freerunning2V2.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/gokartgo-nitro/"> \
<span class="icon-wrap"> \
<img src="https://lh6.googleusercontent.com/-FbIkB3Zd6Rw/UhYroqMs9aI/AAAAAAAACrA/NTul3WbrrQE/w148-h108-no/gokartgonitrov2.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/motocross-nitro/"> \
<span class="icon-wrap"> \
<img src="https://lh6.googleusercontent.com/-SrnaLbpNvvw/UhYnD_J9PNI/AAAAAAAACqg/4UoUsJuL4v8/w148-h108-no/motocrossnitro.jpg"/> \
</span> \
</a> \
</div> <div class="block"> \
<a target="_blank" href="http://jueg.us/sugar-cannon/"> \
<span class="icon-wrap"> \
<img src="https://lh3.googleusercontent.com/-Ihpm-5KYWc0/UhkeMuoG_tI/AAAAAAAAC5I/FPgiDiiaZSg/w150-h110-no/sugar+cannon.jpg"/> \
</span> \
</a> \
</div> \
</div>\
</div> \
<div id="gcNavRight">&nbsp;</div> \
<div id="gcNavLeft">&nbsp;</div> ';
        $('#slider-de-juegos-v').html(lestr);
         
        setTimeout(function(){  $('#slider-de-juegos-v').show(); ghostCarousel(); 
           
            
        } ,900);
        
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

var _gaq = _gaq || [];

        _gaq.push(['juegus_slider1._setAccount', 'UA-43658701-1']);
        //_gaq.push(['juegus_slider1._setDomainName', window.location.host]);
        _gaq.push(['juegus_slider1._setReferrerOverride', window.location.host])
        _gaq.push(['juegus_slider1._setAllowLinker', true]);
        _gaq.push(['juegus_slider1.juegus_slider1._trackPageview']);


(function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
