import {GraphQLObjectType, GraphQLInputObjectType, GraphQLInt, GraphQLString, GraphQLNonNull} from 'graphql'

export const Client = new GraphQLObjectType({
  name: 'Client',
  description: 'Client Information ...',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        description: 'auto-gen id from Sequelize.',
        resolve(client) {
          return client.id
        },
      },
      code: {
        type: GraphQLString,
        description: 'This code should be controlled by user.',
        resolve(client) {
          return client.code
        },
      },
      name: {
        type: GraphQLString,
        resolve(client) {
          return client.name
        },
      },
      address: {
        type: GraphQLString,
        resolve(client) {
          return client.address
        },
      },
      phone: {
        type: GraphQLInt,
        description:
          'This is only a listing price for reference, the real selling/buying price would be different for each transaction',
        resolve(client) {
          return client.phone
        },
      },
    }
  },
})

export const ClientInput = new GraphQLInputObjectType({
  name: 'ClientInput',
  description: 'This is the Input for Client type',
  fields: () => ({
    id: {
      // no need for GraphQLNonNull wrap, coz this Input's id is used in upsert later
      type: GraphQLInt,
    },
    code: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLInt,
    },
  }),
})
