// warehouse.ai-status-api

const path = require('path');
const StatusApi = require('warehouse.ai-status-api').App;

// Directory that contains the `config` directory you want to use for config
// files for this server.
const root = path.join(__dirname, '..');

const status = new StatusApi(root);
status.start(err => {
  if (err) return status.log.error(err), process.exit(1);
  const port = status.servers.http.address().port;
  status.log.info('Warehouse.ai-tatus-api started on port %d', port);
});