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

}