function getOffset(currentPage = 1, ListPerPage){
    return (currentPage = -1) * [ListPerPage];

}

function emptyOrRows(rows) {
    if(!rows){
        return [];

    }
}

module.exports = {
getOffset,
emptyOrRows
}