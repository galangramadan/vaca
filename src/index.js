require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bookRoute = require('./routes/book.route');
const userRoute = require('./routes/user.route');
const pricingRoute = require('./routes/pricing.route');
const transactionRoute = require('./routes/transaction.route');
const subscriptionRoute = require('./routes/subscription.route');
const { sequelize } = require('./models');

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

sequelize
  .authenticate()
  .then(function (error) {
    console.log('database has successfully connected');
  })
  .catch(function (error) {
    console.log('unable connect to database' + error);
  });

app.use('/api/user', userRoute);
app.use('/api/book', bookRoute);
app.use('/api/pricing', pricingRoute);
app.use('/api/transaction', transactionRoute);
app.use('/api/subscription', subscriptionRoute);

app.listen(PORT, () => {
  console.log('Server is running on ' + PORT);
});
