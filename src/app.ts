import { type RouteOptions, fastify } from 'fastify'
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

export async function initApp(route: RouteOptions) {
  const app = fastify({
    logger: false,
    disableRequestLogging: true,
  })

  app.setValidatorCompiler(validatorCompiler)
  app.setSerializerCompiler(serializerCompiler)

  app.withTypeProvider<ZodTypeProvider>().route(route)
  await app.ready()
  return app
}
