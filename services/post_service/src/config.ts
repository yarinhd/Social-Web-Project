export const config = {
    db: {
        server: `mongodb://${process.env.DB_SERVER || `localhost`}`,
        name: process.env.DB_NAME || 'social_web',
        port: +(process.env.DB_PORT || 27017)
    },
    serverPort: +(process.env.PORT || 3002)
}