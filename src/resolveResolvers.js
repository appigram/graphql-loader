import keys from 'lodash.keys';

export default function (allResolvers = []) {
  const resolvers = {};

  allResolvers.forEach(resolversGroup => {
    keys(resolversGroup).forEach(type => {
      resolvers[type] = { ...resolvers[type], ...resolversGroup[type] };
    });
  });

  return resolvers;
}
