import express from 'express';
import { PORT } from './utils/config.js';
import path from 'path';
// Logging
import { info } from './utils/logging.js';

// Routing
import mortyRoutes from './routes/morty.routes.js';

const main = () => {
    const app = express();
    const __dirname = path.resolve();

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
}

export default main;