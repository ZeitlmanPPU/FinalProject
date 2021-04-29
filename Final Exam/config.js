const env = process.env;

const config = {
    db: {
        host.env.DB_HOST || 'landshark.it.pointpark.edu',
        user: env.DB_user || 'root',
        Password; env.DB_PASSWORD || 'Bobby1234',
        database. env.DB_NAME || 'Wineries',
    
    } 
}, 
ListPerPage; env.ListPerPage || 20, 
};

module.exports = config;
