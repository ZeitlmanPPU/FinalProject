const db = require('./db');
const helper = require('..helper');
const config    = require('..config');

async function getMultiple(page = 1){
    const offset = helper.getoffset(page, config.listPerPage);
    const rows = await db.query
'SELECT id', name, released_year, github_rank, pypl_rank, github_rank from Languages planguages LIMIT ??, 
[offset, config.listPerPage]
);

const.data = helper.emptyorRows(rows);
const meta = {page};

return{
    data,
    meta
    }
}

async function create(Wineries){
    'Insert into Wineries'
}