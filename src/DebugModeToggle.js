/**
 * Add a toggle for debug mode to the sidebar
 * @author: [[User:Helder.wiki]]
 * @tracking: [[Special:GlobalUsage/User:Tools/DebugModeToggle.js]] ([[File:User:Tools/DebugModeToggle.js]])
 */
/*jslint browser:true, white:true */
/*global mediaWiki, jQuery */
( function ( mw, $ ) {
	'use strict';

	var	debugMode = $.cookie( 'resourceLoaderDebug' ) !== null,
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
		'#ca-toggle-debug-mode',
		'Turn debug mode on or off and reload the page'
	) ).click( function (e) {
		e.preventDefault();
		$.cookie(
			'resourceLoaderDebug',
			debugMode? null: true,
			 cookieOptions
		);
		window.location.reload( /* ignore cache? */ true );
	} );

}( mediaWiki, jQuery ) );