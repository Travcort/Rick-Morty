import express from 'express';
import { PORT } from './utils/config.js';
import path from 'path';
// Logging
import { info } from './utils/logging.js';

// Routing
import mortyRoutes from './routes/morty.routes.js';

const createServer = () => {
    const app = express();
    const __dirname = path.resolve();

    app.use('/api', mortyRoutes);

    app.use(express.static(path.join(__dirname, 'frontend/dist')));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })

    return app;
}

// Check for Environment
if (process.env.NODE_ENV === "development") {
    const app = createServer();
    app.listen(PORT, () => {
        info(`Server running on \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
    });  
}
// Serverless
const app = createServer();
export default app;