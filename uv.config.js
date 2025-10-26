// Ultraviolet configuration (client + service worker)
self.__uv$config = {
  bare: 'https://sueu.gace.space/bare/',
  prefix: '/service/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/uv.handler.js',
  bundle : '/uv.bundle.js',
  config : '/uv.config.js',
};
