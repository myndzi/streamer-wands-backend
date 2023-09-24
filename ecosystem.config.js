module.exports = {
    apps: [
        {
            name: 'onlywands',
            script: 'index.js',
            autorestart: true,
            watch: false,
            watch_delay: 1000,
            ignore_watch: ['node_modules', 'views', 'public'],
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
}
