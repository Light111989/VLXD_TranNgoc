import {GraphQLInt, GraphQLList} from 'graphql'
import db from '../db'
import Sequelize from 'sequelize'
import {Client, ClientInput} from './type'
const Op = Sequelize.Op

export default {
  deleteClient: {
    type: GraphQLInt,
    args: {
      input: {
        type: new GraphQLList(GraphQLInt),
      },
    },
    resolve(_, {input}) {
      return db.models.client.destroy({
        where: {
          id: {
            [Op.in]: input,
          },
        },
      })
    },
  },
  updateClient: {
    type: Client,
    args: {
      input: {
        type: ClientInput,
      },
    },
    resolve(_, {input}) {
      return db.models.client.upsert(input).then(() => {
        return input
      })
    },
  },
}
