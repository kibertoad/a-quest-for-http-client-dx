import { injectPost } from '@lokalise/fastify-api-contracts'
import { describe, expect, it } from 'vitest'
import { initApp } from '../src/app.js'
import {postContract, postContractWithPathParams} from '../src/contracts.js'
import { postRouteWithPathParams } from '../src/routes.js'

describe('app', () => {
  it('uses API spec to build valid POST route in fastify app', async () => {
    expect.assertions(3)

    const app = await initApp(postRouteWithPathParams)
    const response = await injectPost(app, postContractWithPathParams, {
      pathParams: { userId: '1' },
      body: { name: 'Jack London' },
    })

    expect(response.statusCode).toBe(200)
  })
})
