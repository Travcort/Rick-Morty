import express from 'express';
const app = express();
import { PORT } from './utils/config.js';

// Logging
import { info } from './utils/logging.js';

// Routing
import mortyRoutes from './routes/morty.routes.js';
app.use('/api', mortyRoutes);

app.listen(PORT, () => {
    info(`Server running on \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
})