declare module 'sqlexecutor' {
    import { Pool, PoolConnection, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
  
    interface ExecutorConfig {
      host?: string;
      user?: string;
      password?: string;
      database?: string;
      waitForConnections?: boolean;
      connectionLimit?: number;
      queueLimit?: number;
      timezone?: string;
      charset?: string;
      port?: number;
    }
  
    export class Executor {
      constructor(config?: ExecutorConfig);
      executeQuery(query: string, params?: any[]): Promise<RowDataPacket[]>;
      static createExecutor(config: ExecutorConfig): (query: string, params?: any[]) => Promise<RowDataPacket[]>;
      call(query: string, params?: any[]): Promise<RowDataPacket[]>;
    }
  
    export default Executor;
  }
  