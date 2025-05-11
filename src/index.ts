import { serve } from 'bun'
import homepage from './index.html'

const server = serve({
  routes: {
    '/': homepage,
  },
})

console.log(`Server is running on ${server.url}`)
