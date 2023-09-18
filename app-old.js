const http = require('node:http')

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  // res.end(JSON.stringify({
  //   data: 'Hello World!'
  // }));
  res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
  res.writeHead(200, { 'Content-Type': 'application/csv' })
  res.write('id , name\n')
  res.write('1 , henry\n')
  res.write('2 , gustav\n')
  res.write('3 , name 1\n')
  res.write('4 , name 2\n')

  //   const user = {
  //     id: 1,
  //     name: 'Gustav'
  //   }
  //   res.write(JSON.stringify(user))
  res.end()
})

server.listen(8000)

console.log('listen on port 8000')
