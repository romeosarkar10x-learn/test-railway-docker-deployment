const port = process.env.PORT;

const server = Bun.serve({
    port: port ?? 3000,
    fetch(req) {
        return new Response(
            `<!DOCTYPE html>
<html>
<head>
  <title>Hello World</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      font-family: system-ui, sans-serif;
      background: #1a1a2e;
      color: #eee;
    }
    h1 { font-size: 3rem; }
  </style>
</head>
<body>
  <h1>👋 Hello, World!</h1>
</body>
</html>`,
            { status: 200, headers: { "Content-Type": "text/html" } },
        );
    },
});

console.log(`Listening on port ${server.port}...`);
