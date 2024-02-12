const Executor = require('./lib/index.js');

module.exports = {
  Executor,
  executeQuery: Executor.executeQuery,
  createExecutor: Executor.createExecutor
};