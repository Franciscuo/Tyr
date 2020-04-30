module.exports = {
    apps: [{
        name: "Tyr",
        script: "src/index.js",
        instances: 1,
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}