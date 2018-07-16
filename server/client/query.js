import {GraphQLList} from 'graphql'
import db from '../db'
import {Client} from './type'

export default {
  listClient: {
    description: `List all Client ###
    {
      listClient {
        id
        name
        code
        address
        phone
      }
    }`,
    type: new GraphQLList(Client),
    resolve() {
      return db.models.client.findAll()
    },
  },
}
