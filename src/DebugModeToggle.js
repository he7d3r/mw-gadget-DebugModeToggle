/**
 * Add a toggle for debug mode to the sidebar
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
( function ( mw, $ ) {
	'use strict';

	var debugMode = mw.config.get( 'debug' ),
		label = {
			'true': 'Disable debug mode',
			'false': 'Enable debug mode'
		},
		cookieOptions = {
			expires: 1,
			path: '/'
		};
	if ( $('#ca-toggle-debug-mode').length ) {
		return;
	}
	$( mw.util.addPortletLink(
		'p-tb',
		'#',
		label[ debugMode ],
		'ca-toggle-debug-mode',
		'Turn debug mode on or off and reload the page'
	) ).click( function (e) {
		e.preventDefault();
		$.cookie(
			'resourceLoaderDebug',
			debugMode ? null : true,
			cookieOptions
		);
		window.location.reload( /* ignore cache? */ true );
	} );

}( mediaWiki, jQuery ) );
