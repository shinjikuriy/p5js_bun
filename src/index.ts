import { serve } from 'bun'
import homepage from './index.html'

const server = serve({
  // hostname: 'localhost',
  // port: 3000,
  // development: {
  //   hmr: true,
  // },
  routes: {
    '/': homepage,
  },
})

console.log(`Listening on ${server.url}`)
