const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const dashboard = require('./routes/dashboard.routes');
const expense = require('./routes/expense.routes');
const expenseType = require('./routes/expenseType.routes');
const expenseGroup = require('./routes/expenseGroup.routes');
const revenue = require('./routes/revenue.routes');
const revenueType = require('./routes/revenueType.routes');

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes); //Autenticação
app.use('/dashboard', dashboard); //DashBoard
app.use('/expense', expense); //Despesas
app.use('/expense-type', expenseType); //Tipos de Despesas
app.use('/expense-group', expenseGroup); //Tipos de Despesas
app.use('/revenue', revenue); //Receitas
app.use('/revenue-type', revenueType); //Tipos de Receitas

module.exports = app;
