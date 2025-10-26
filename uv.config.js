// Ultraviolet configuration (client + service worker)
self.__uv$config = {
  // Replace with your deployed Bare worker URL (must end with /bare/)
  bare: 'https://sueu.gace.space/bare/',
  prefix: '/service/',

  // UV codecs
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,

  // Filenames served by this static site:
  handler: '/uv.handler.js',
  bundle : '/uv.bundle.js',
  config : '/uv.config.js',
};
