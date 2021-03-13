/**
 * Add a toggle for debug mode to the sidebar
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
( function ( mw, $ ) {
	'use strict';

	var debugMode = mw.config.get( 'debug' );

	function onClick( e ) {
		var sep = location.search.indexOf( '?' ) === -1 ? '?' : '&';
		e.preventDefault();
		$.cookie(
			'resourceLoaderDebug',
			debugMode === 0 ? null : true,
			{
				expires: 1,
				path: '/'
			}
		);
		location.href = location.href
			.replace( location.hash, '' )
			.replace( sep + 'debug=' + debugMode, '' ) +
				sep + 'debug=' + !debugMode;
	}
	function load() {
		var id = 'ca-toggle-debug-mode',
			label = {
				1: 'Disable debug mode',
				0: 'Enable debug mode'
			};
		if ( $( '#' + id ).length ) {
			return;
		}
		$( mw.util.addPortletLink(
			'p-tb',
			'#',
			label[ debugMode ],
			id,
			'Turn debug mode on or off and reload the page'
		) )
		.click( onClick )
		.find('a').css( 'color', '#808' );
	}
	$.when(
		mw.loader.using( 'mediawiki.util' ),
		$.ready
	).then( load );

}( mediaWiki, jQuery ) );
