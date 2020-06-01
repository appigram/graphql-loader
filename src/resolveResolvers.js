import keys from 'lodash-es/keys'
import { allResolvers } from './store'

export default function () {
  const resolvers = {}

  allResolvers.forEach(resolversGroup => {
    keys(resolversGroup).forEach(type => {
      resolvers[type] = { ...resolvers[type], ...resolversGroup[type] }
    })
  })

  return resolvers
}
