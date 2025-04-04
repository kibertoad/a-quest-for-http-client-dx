import { buildFastifyPayloadRoute } from '@lokalise/fastify-api-contracts'
import { postContract, postContractWithPathParams } from './contracts.js'

export const postRoute = buildFastifyPayloadRoute(postContract, (req) => {
  const { name } = req.body

  console.log(`Name is ${name}`)

  return Promise.resolve()
})

export const postRouteWithPathParams = buildFastifyPayloadRoute(
  postContractWithPathParams,
  (req) => {
    const { name } = req.body
    const { userId } = req.params

    console.log(`name is ${name}`)
    console.log(`userId is ${userId}`)

    return Promise.resolve()
  },
)
