import express from 'express';
import { NODE_ENV, PORT } from '@config';
import { logger } from '@utils/logger';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor() {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=== COLLECTION APP ===`);
      logger.info(`=== ENV: ${this.env} ===`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }
}

export default App;
