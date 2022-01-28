
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined || !matrix.length) return [];
    let result = [];
    for (let i=0; i<matrix.length; i++) {
        if (i%2) 
            result.push(...matrix[i].reverse());
        else 
            result.push(...matrix[i]);
    }
    return result;
}
