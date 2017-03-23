module.exports = (function() {
	var referenceBaseUrl = 'https://drupalcampaarhus.dk',
			testBaseUrl = 'http://drupalcampaarhus.vm',

			urls = [
				'/',
				'/schedule',
				'/registration',
				'/location',
				'/sponsor',
				'/contact-us'
			];

	return {
		'viewports': [
			{
				'name': 'desktop',
				'width': 1920,
				'height': 1080
			}
		],
		'scenarios': urls.map(function(path) {
			return {
				'label': path,
				'referenceUrl': referenceBaseUrl + path,
				'url': testBaseUrl + path,

				'hideSelectors': [],
				'removeSelectors': [],
				'selectors': [
					'body'
				],
				'readyEvent': null,
				'delay': 500,
				'misMatchThreshold' : 0.1
			};
		}),
		'paths': {
			'bitmaps_reference': 'backstop_data/bitmaps_reference',
			'bitmaps_test': 'backstop_data/bitmaps_test',
			'casper_scripts': 'backstop_data/casper_scripts',
			'html_report': 'backstop_data/html_report',
			'ci_report': 'backstop_data/ci_report'
		},
		'casperFlags': [],
		'engine': 'phantomjs',
		'report': ['browser','CLI'],
		'debug': false
	};
}());
