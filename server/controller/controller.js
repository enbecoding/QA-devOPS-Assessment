const path = require("path");

module.exports = {
    getHomepage: (req,res) => {
        res.sendFile(path.join(__dirname, '../../public/index.html'))
    },
    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/index.css'))
    },
    getJS: (req,res) => {
        res.sendFile(path.join(__dirname, '../../public/index.js'))
    }
}