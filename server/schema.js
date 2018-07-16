import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import qryProduct from './product/query'
import mutProduct from './product/mutation'
import qryClient from './client/query'
import mutClient from './client/mutation'

const query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the ROOT Query',
  fields: () => {
    return {
      ...qryProduct,
      ...qryClient,
    }
  },
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is for create/update/delete operation',
  fields() {
    return {
      ...mutProduct,
      ...mutClient,
    }
  },
})

const SCHEMA = new GraphQLSchema({
  query,
  mutation,
})

export default SCHEMA
