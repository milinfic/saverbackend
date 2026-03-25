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
const authMiddleware = require('./middleware/auth.middleware');

const app = express();

// Configurações básicas
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// --- ROTAS PÚBLICAS (não precisam de token) ---
app.use('/auth', authRoutes); // login, refresh

// --- MIDDLEWARE GLOBAL (todas rotas abaixo precisam de token) ---
app.use(authMiddleware.verifyToken);

// --- ROTAS PROTEGIDAS ---
app.use('/dashboard', dashboard);
app.use('/expense', expense);
app.use('/expense-type', expenseType);
app.use('/expense-group', expenseGroup);
app.use('/revenue', revenue);
app.use('/revenue-type', revenueType);

module.exports = app;