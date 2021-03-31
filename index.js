// Step 1: Create a Vue instance
const Vue = require('vue');
const app = new Vue({
    template: `<div>Hello World</div>`,
})

// Step 2: Create a renderer
const renderer = require('vue-server-renderer').createRenderer()

// Step 3: Render the Vue instance to HTML
renderer.renderToString(app, (err, html) => {
    if (err) throw err
    console.log(html)
    // => <div data-server-rendered="true">Hello World</div>
})

// in 2.5.0+, returns a Promise if no callback is passed:
renderer
    .renderToString(app)
    .then((html) => {
        console.log(html)
    })
    .catch((err) => {
        console.error(err)
    })

    const Vue = require('vue')
    const server = require('express')()
    const renderer = require('vue-server-renderer').createRenderer()

    server.get('*', (req, res) => {
        const app = new Vue({
            data: {
                url: req.url,
            },
            template: `<div>The visited URL is: {{ url }}</div>`,
        })

        renderer.renderToString(app, (err, html) => {
            if (err) {
                res.status(500).end('Internal Server Error')
                return
            }
            res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
        })
    })

    server.listen(8080)
