const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRegistrationRoutes = require('./routes/api/userRegistration/userRegister');
const userLoginRoutes = require('./routes/api/userLogin/userLogin');

// const orderRoutes = require('./routes/api/users/orders');
// const productRoutes = require('./routes/api/products/products');
// const categoryRoutes = require('./routes/api/products/categories');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', userRegistrationRoutes);
app.use('/api/users', userLoginRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/products', categoryRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => { });