//let auto rename


// respond with "hello world" when a GET request is made to the homepage
app.get('/v1', async function (req: any, res: { send: (arg0: string) => void; }) {
  res.send('hello world v1');
})

// GET method route
app.get('/v1', async function (req: any, res: { send: (arg0: string) => void; }) {
  res.send('GET request to the homepage');
  })

  app.listen('/tab1', async function (req: any, res: { send: (arg0: any) => void; }) {
    res.send(require('./pages/Tab1'));
  })
  app.listen('/tab2', async function (req: any, res: { send: (arg0: any) => void; }) {
    res.send(require('./pages/Tab2'));
  })

  app.listen('/tab3', async function (req: any, res: { send: (arg0: any) => void; }) {
    res.send(require('./pages/Tab3'));
  })

module.exports = {};
