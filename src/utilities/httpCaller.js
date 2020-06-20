import mockGetCurrentCourses from "../mockedHTTPResponses/mockGetCurrentCourses";
import mockGetCurrentStudent from "../mockedHTTPResponses/mockGetCurrentStudent";

const getCurrentCourses = async request => {
    return mockGetCurrentCourses;
}
const getCurrentStudent = async (user,pass) => {
    if(user === "student" && pass=="student123")
        return mockGetCurrentStudent;
    else
        return undefined;
}

export default {
    getCurrentCourses,
    getCurrentStudent
}