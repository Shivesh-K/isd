const path = require('path');
module.exports = {
    "mode": "none",
    "entry": "./js/db/complaints.js",
    "output": {
        "path": __dirname + '/js/db/dist',
        "filename": "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'js', 'db', 'dist')
    }
}