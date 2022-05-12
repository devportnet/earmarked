/**
 * Main JS file for Earmarked behaviours
 */

( function( $ ) {
		$('.widget-area .nav li').each(function(){
			$(this).find('a').each(function(){
				$(this).wrapInner('<span class="screen-reader-text"></span>');
			});
		});
} )( jQuery );