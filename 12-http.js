const http = require('http')

const PORT = process.env.PORT || 5000
const HOSTNAME = process.env.HOSTNAME || 'localhost'

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html')
  if (req.url === "/") {
    res.end('<h3>Welcome to our home page</h3>')
  } else if (req.url === "/about") {
    res.end(`<h3>Here's our short history</h3>`)
  } else {
    res.end(`
      <h3>Oops!</h3>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>`
    )
  }
})

server.listen(PORT, HOSTNAME, () => { console.log(`Server running at http://${HOSTNAME}:${PORT}/`)})

