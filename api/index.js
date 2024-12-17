import express from 'express';
export const app = express();
import { PORT } from './utils/config.js';

import path from 'path';
const __dirname = path.resolve();

// Logging
import { info } from './utils/logging.js';

// Routing
import mortyRoutes from './routes/morty.routes.js';
app.use('/api', mortyRoutes);

// Check for Environment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'frontend/dist')));

    // Routing
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}
else {
    app.listen(PORT, () => {
        info(`Server running on \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
    });

    app.use(express.static(path.join(__dirname, 'frontend/dist')));
}