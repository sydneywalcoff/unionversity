"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
function searchEvents(options) {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === 'number') {
            return options.query === event.id;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
}
//# sourceMappingURL=index.js.map