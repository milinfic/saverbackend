const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const expense = require('./routes/expense.routes');
const expenseType = require('./routes/expense-type.routes');

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes); //Autenticação
app.use('/expense', expense); //Gastos
app.use('/expensive-type', expenseType); //Tipos de Gastos

module.exports = app;
