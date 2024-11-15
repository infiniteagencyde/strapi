// module.exports = ({ env }) => ({
//   connection: {
//       client: 'postgres',
//       connection: {
//           connectionString: env('DATABASE_PRIVATE_URL')
//       },
//       pool: { min: 0 }
//   }
// });

const path = require("path");

module.exports = () => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(__dirname, "..", ".tmp/data.db"),
    },
    useNullAsDefault: true,
  },
});