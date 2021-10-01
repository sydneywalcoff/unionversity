import courses from './courses';
import studyGroups from './studyGroups';

type Course = {
    id: number;
    studyGroupId: number;
    title: string;
    keywords: string[];
    eventType: string;
}

type StudyGroup = {
    id: number;
    courseId: number;
    title: string;
    keywords: string[];
    eventType: string;
}

type SearchEventsOptions = {
    query: number | string;
    eventType: 'courses' | 'groups';
}

function searchEvents(options: SearchEventsOptions) {
    const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;
    return events.filter((event: (Course | StudyGroup)) => {
        if (typeof options.query === 'number') {
            return options.query === event.id;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
}

let enrolledEvents: (Course | StudyGroup)[] = [];

// allow enroll() fxn to take an array of courses and add them all to enrolled events
function enroll(events: (Course | StudyGroup)[]) {
    events.forEach(event => {
        enrolledEvents.push(event);
    })
};

// add dropCourse() fxn

function dropCourse(options: SearchEventsOptions) {
    const eventToDelete = searchEvents(options)
}

// add another fxn that prints only the titles of your enrolled events
function printCourseNames() {
    let courseNames = [];
    enrolledEvents.forEach(event => courseNames.push(event.title));
    console.log(courseNames);
}

// search events test
console.log('search events', searchEvents({
    query: 'art',
    eventType: 'courses'
}));

// enroll in event test
enroll([
    {
        id: 1,
        studyGroupId: 1,
        title: 'Improvisational Arts Lab',
        keywords: ['improv', 'art', 'performance', 'lab'],
        eventType: 'course'
    },
    {
        id: 3,
        studyGroupId: 3,
        title: '19th Century Art',
        keywords: ['1800s', 'art', 'history'],
        eventType: 'course',
    },
]);
console.log(enrolledEvents);

// print courseNames test
printCourseNames();