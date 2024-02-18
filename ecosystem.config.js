const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    apps: [
        {
            name: process.env.APP_NAME,
            script: "dist/index.js",
            watch: false,
            max_memory_restart: "1G",
            exec_mode: "cluster",
            instances: 1,
            env_development: {
                env: {
                    NODE_ENV: "development",
                },
                env_production: {
                    NODE_ENV: "production",
                }
            }
        }
    ]
}