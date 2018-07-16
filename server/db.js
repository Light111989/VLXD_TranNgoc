import Sequelize from 'sequelize'

const Op = Sequelize.Op

const Conn = new Sequelize('vlxd', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: Op,
  pool: {
    port: 3306,
    max: 5,
    min: 1,
    accquire: 60000,
    idle: 20000,
  },
})
// eslint-disable-next-line no-unused-vars
const Product = Conn.define('product', {
  code: {type: Sequelize.STRING, allowNull: false},
  name: {type: Sequelize.STRING, allowNull: false},
  unit: {type: Sequelize.STRING, allowNull: true},
  listingPrice: {type: Sequelize.INTEGER, allowNull: true},
})

// eslint-disable-next-line no-unused-vars
const Client = Conn.define('client', {
  code: {type: Sequelize.STRING, allowNull: false},
  name: {type: Sequelize.STRING, allowNull: false},
  address: {type: Sequelize.STRING, allowNull: true},
  phone: {type: Sequelize.INTEGER, allowNull: true},
})
// // Generating demo Data
const Supplier = Conn.define('supplier', {
  taxcode: {type: Sequelize.STRING, allowNull: false},
  name: {type: Sequelize.STRING, allowNull: false},
  address: {type: Sequelize.STRING, allowNull: true},
  phone: {type: Sequelize.STRING, allowNull: true},
})

Conn.authenticate()

// Generating demo Data
// import _d from 'lodash'
// import Faker from 'faker'

// Conn.sync({force: true}).then(() => {
//   console.log('DB Structure created ...')
//   _d.times(100, () => {
//     return Client.create({
//       code: Faker.address.countryCode(),
//       name: Faker.commerce.productName(),
//       address: Faker.commerce.productMaterial(),
//       phone: Faker.commerce.price(),
//     })
//   })
// })

// Conn.sync({force: true}).then(() => {
//   console.log('DB Structure created ...')
//   _d.times(100, () => {
//     return Supplier.create({
//       taxcode: Faker.address.countryCode(),
//       name: Faker.commerce.productName(),
//       address: Faker.address.streetAddress(),
//       phone: Faker.phone.phoneNumber(),
//     })
//   })
// })

export default Conn
