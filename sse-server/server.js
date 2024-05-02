const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin' : '*'
  });

  setInterval(() => {
    const event = {
      id: new Date().toISOString(),
      data: 'This is an event',
    };

    // console.log('origin: '+JSON.stringify(req.headers));

    res.write(`data: ${JSON.stringify(event)}\n\n`);
  }, 10000);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
