$(function() {var tb=$("[data-slide-active]"), cs=parseInt(tb.attr('data-slide-count')), ww=window.outerWidth, wm=800, ih=$('html'); if(ww<wm+1){tb.swipe({swipe:function(event, direction, distance, duration, fingerCount, fingerData) { if(cs>1){var ca=parseInt(tb.attr('data-slide-active')), to_a=false; if(direction=='left'){if(ca+1>cs){var to_a=1;}else{var to_a=ca+1;};};if(direction=='right'){if(ca-1<1){var to_a=cs;}else{var to_a=ca-1;};}; if(to_a!==false){tb.attr('data-slide-active',to_a);};}; }}); tb.swipe({fingers:1}); };
$('.mobile_menu_button').bind('click',function(){var m=$('.head_nav[data-open-menu]'), stt=parseInt(m.attr('data-open-menu')); if(stt==0){m.attr('data-open-menu',1); ih.scrollTop(0); ih.css('overflow-y','hidden');}else{m.attr('data-open-menu',0);  ih.css('overflow-y','auto');};});
});
