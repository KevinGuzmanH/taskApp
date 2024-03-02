const express = require('express');
const taskRoutes = require('./routes/routes');

const app = express();
app.use(express.json());

// Ruta base
app.use('/api/v1', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
