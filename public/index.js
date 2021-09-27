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
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents.push(event);
}
;
// allow enroll() fxn to take an array of courses and add them all to enrolled events
// add dropCourse() fxn
// add another fxn that prints only the titles of your enrolled events
function printCourseNames() {
    let courseNames = [];
    enrolledEvents.forEach(event => courseNames.push(event.title));
    console.log(courseNames);
}
// search events test
console.log(searchEvents({
    query: 1,
    eventType: 'courses'
}));
// enroll in event test
enroll({
    id: 1,
    studyGroupId: 1,
    title: 'Improvisational Arts Lab',
    keywords: ['improv', 'art', 'performance', 'lab'],
    eventType: 'course'
});
console.log(enrolledEvents);
// print courseNames test
printCourseNames();
//# sourceMappingURL=index.js.map