'use strict';

const axios = require('axios');

const fs = require('fs');
const path = require('path');

console.log('Building library pages');

(async () => {
	const readmes = await Promise.all(
		['oikos', 'oikos', 'oikos-js'].map(repo => {
			const url = `https://raw.githubusercontent.com/oikos-cash/${repo}/master/README.md`;
			console.log(url);
			return axios
				.get(url)
				.then(({ data }) => [
					`https://github.com/oikos-cash/${repo}`,
					path.join(__dirname, '..', 'content', 'libraries', `${repo}.md`),
					data,
				]);
		}),
	);

	readmes.forEach(([repo, path, content]) =>
		fs.writeFileSync(path, `!!! info "Notice"\n\t\tImported from ${repo}\n\n${content}`),
	);

	// now do oikos publish script
	await axios
		.get('https://raw.githubusercontent.com/oikos-cash/oikos/master/publish/README.md')
		.then(({ data }) =>
			fs.writeFileSync(
				path.join(__dirname, '..', 'content', 'contracts', 'publisher.md'),
				'!!! info "Notice"\n\t\tThis details the `publish` script in the oikos repository for building, deploying and verifying contracts.\n\n' +
					'\t\tImported from https://github.com/oikos-cash/oikos/tree/master/publish\n\n' +
					data,
			),
		);
})();
