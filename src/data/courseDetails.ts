import pythonDetails from "$details/python-beginner-course.md?raw";
import webDetails from "$details/web-development-course.md?raw";

const courseDetails: CourseDetail[] = [
    {
        slug: "python-beginner-course",
        detail: pythonDetails
    },
    {
        slug: "web-development-course",
        detail: webDetails
    }
];

export default courseDetails;
