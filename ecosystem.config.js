// ecosystem.config.js - Configuração PM2 para iNuTech iCT Plataforma
module.exports = {
  apps: [{
    name: 'inutech-plataforma',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 17011',
    cwd: '/var/www/inutech/plataforma',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 17011,
      HOST: '0.0.0.0',
      DATABASE_URL: 'file:./prisma/dev.db'
    },
    error_file: '/var/log/inutech/error.log',
    out_file: '/var/log/inutech/out.log',
    log_file: '/var/log/inutech/combined.log',
    time: true,
    merge_logs: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    listen_timeout: 10000,
    kill_timeout: 5000,
    wait_ready: true
  }]
}
