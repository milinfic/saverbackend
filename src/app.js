const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const expense = require('./routes/expense.routes');
const expenseType = require('./routes/expense-type.routes');
const revenue = require('./routes/revenue.routes');
const revenueType = require('./routes/revenue-type.routes');

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes); //Autenticação
app.use('/expense', expense); //Despesas
app.use('/expensive-type', expenseType); //Tipos de Despesas
app.use('/revenue', revenue); //Receitas
app.use('/revenue-type', revenueType); //Tipos de Receitas

module.exports = app;
