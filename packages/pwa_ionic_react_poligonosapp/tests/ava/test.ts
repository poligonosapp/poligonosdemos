const test = require('ava');

// schema: ./schema.json
// documents: ./src/components/**/*.jsx

test('foo', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});