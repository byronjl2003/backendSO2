function getproces(){

    var fs = require('fs');
    var contents = fs.readFileSync('/proc/cpu_201222626', 'utf8');
    return contents;
}
module.exports = {
    getproces,
};