# BackstopJS examples

Examples on using https://github.com/garris/BackstopJS.

Install backstop:

```
npm install --global backstopjs
```

For some tests, e.g. when using [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), you may also need [SlimerJS](https://slimerjs.org/):

```
npm install --global slimerjs
```

Generate reference screen shots by running backstop with a specific config file:

```
backstop --config=config.js reference
```

Run tests:

```
backstop --config=config.js test
```

More on CSS Regression Testing (and BackstopJS): https://css-tricks.com/automating-css-regression-testing/
