export const GET = (req, res, url, payload) => {
  const ip = res.socket.remoteAddress;
  const port = res.socket.remotePort;
  res.json({name: `Path ${url.pathname}. Your IP address is ${ip} and your source port is ${port}.`})
}

export const OPTIONS = (req, res, url, payload) => {
  res.json({name: "root handlerOptions"})
}

export const POST = (req, res, url, payload) => {
  res.json(payload)
}
