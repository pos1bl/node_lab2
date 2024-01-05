export const GET = (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  res.end(`
      Name: John Doe
      Age: 25
      Email: john.doe@example.com
  `);
}

export const POST = (req, res, payload) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('POST request handled' + payload);
}

export const OPTIONS = (req, res) => {
  res.setHeader('Allow', 'GET, POST, OPTIONS');
  res.end();
}
