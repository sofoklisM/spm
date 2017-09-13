import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging().plugin('aurelia-google-analytics', config => {
		config.init('UA-100791199-1');
		config.attach({
			logging: {
				// Set to `true` to have some log messages appear in the browser console.
				enabled: true
			},
			pageTracking: {
				// Set to `false` to disable in non-production environments.
				enabled: true,
				// Optional. By default it gets the title from payload.instruction.config.title.
				getTitle: (payload) => {
					// For example, if you want to retrieve the tile from the document instead override with the following.
					return document.title;
				},
				// Optional. By default it gets the URL fragment from payload.instruction.fragment.
				getUrl: (payload) => {
					// For example, if you want to get full URL each time override with the following.
					return window.location.href;
				}
			},
			clickTracking: {
				// Set to `false` to disable in non-production environments.
				enabled: true,
				// Optional. By default it tracks clicks on anchors and buttons.
				filter: (element) => {
					// For example, if you want to also track clicks on span elements override with the following.
					return element instanceof HTMLElement &&
						(element.nodeName.toLowerCase() === 'a' ||
							element.nodeName.toLowerCase() === 'button' ||
							element.nodeName.toLowerCase() === 'span');
				}
			},
			exceptionTracking: {
				// Set to `false` to disable in non-production environments.
				enabled: true
			}
		});
	});

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
