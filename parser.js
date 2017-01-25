// Imports
const moment = require('moment');
const datejs = require('datejs');


// Parser
const Parser = {
    parse: function(text, language_code=["es-GT"]) {
        // Initilize parser localization
        Date.i18n.setLanguage(language_code);

        // Parse dates
        const date = Date.parse(text);
        console.log(date)

        // Return value
        return moment(date);
    }
}

// Exports
module.exports = Parser