var dbName = 'dbblog';

var config = {
  local: {
    mode: 'local',
    port: 3000,
    db: 'mongodb://localhost/' + dbName
  },
  staging: {
    mode: 'staging',
    port: 4000,
    db: 'mongodb://localhost/' + dbName
  },
  production: {
    mode: 'production',
    port: 5000,
    db: 'mongodb://localhost/' + dbName
  }
};
module.exports = (mode) => {
    return config[mode || process.argv[2] || 'local'] || config.local;
};
