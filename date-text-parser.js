// Imports
const moment = require('moment');
const chrono = require('chrono-node');


// Parser
const Parser = {

    parseDate: function(text) {
        return chrono.parseDate(text);
    },

    parse: function(text, timezoneOffset=(-6 * 60)) {
        // Parse dates
        const [date_info,] = chrono.casual.parse(text);
        if(!date_info) {
            return null;
        }

        // Build return data
        if(!date_info.start.isCertain('timezoneOffset')) {
            date_info.start.assign('timezoneOffset', timezoneOffset);
            if(date_info.end) {
                date_info.end.assign('timezoneOffset', timezoneOffset);
            }
        }

        // Return value
        return {
            start: moment(date_info.start.date()),
            end: date_info.end ? moment(date_info.end.date()) : null
        };
    }
}


// Exports
module.exports = Parser