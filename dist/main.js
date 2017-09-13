System.register(['bootstrap'], function (_export, _context) {
	"use strict";

	function configure(aurelia) {
		aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-google-analytics', function (config) {
			config.init('UA-100791199-1');
			config.attach({
				logging: {
					enabled: true
				},
				pageTracking: {
					enabled: true,

					getTitle: function getTitle(payload) {
						return document.title;
					},

					getUrl: function getUrl(payload) {
						return window.location.href;
					}
				},
				clickTracking: {
					enabled: true,

					filter: function filter(element) {
						return element instanceof HTMLElement && (element.nodeName.toLowerCase() === 'a' || element.nodeName.toLowerCase() === 'button' || element.nodeName.toLowerCase() === 'span');
					}
				},
				exceptionTracking: {
					enabled: true
				}
			});
		});

		aurelia.start().then(function () {
			return aurelia.setRoot();
		});
	}

	_export('configure', configure);

	return {
		setters: [function (_bootstrap) {}],
		execute: function () {}
	};
});
//# sourceMappingURL=main.js.map
