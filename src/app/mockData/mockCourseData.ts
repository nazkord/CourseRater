import {ClassForm} from '../model/course'
import {Course} from '../model/course'
import {RatingValues} from '../model/course'

export class MockCourseData {
    public static Courses: Course[] = 
    [
    {
        'id': 1,
        'courseName': 'English',
        'ects': 0,
        'semester': 2,
        'courseForm': ClassForm.EXERCISE,
        'maxNumberOfStudent': 80,
        'rate': [{rating:3}, {rating:5}],
        'logoPath' : 'https://media.istockphoto.com/vectors/cute-bunting-flags-for-english-language-day-vector-id667311368',
        'description': 'This is an example description of a course'
    },
    {
        'id': 2,
        'courseName': 'Math',
        'ects': 6,
        'semester': 1,
        'courseForm': ClassForm.EXERCISE,
        'maxNumberOfStudent': 80,
        'rate': [{rating:3}, {rating:5}],
        'logoPath' : 'https://ak6.picdn.net/shutterstock/videos/1022800246/thumb/1.jpg',
        'description': 'This is an example description of a course'
    },
    {
        'id': 3,
        'courseName': 'Unix',
        'ects': 3,
        'semester': 1,
        'courseForm': ClassForm.LAB,
        'maxNumberOfStudent': 60,
        'rate': [{rating:3}, {rating:5}],
        'logoPath' : 'https://5.imimg.com/data5/BK/HY/IL/GLADMIN-83231209/08-thumbnail-500x500.jpg',
        'description': 'This is an example description of a course'
    },
    {
        'id': 4,
        'courseName': 'Introduction to Web Applications',
        'ects': 3,
        'semester': 3,
        'courseForm': ClassForm.LAB,
        'maxNumberOfStudent': 80,
        'rate': [{rating:3}, {rating:5}],
        'logoPath' : 'http://www.iquad.in/assets/images/webapplications-1400x924-52-1400x924-63.jpg',
        'description': 'This is an example description of a course'
    },
    {
        'id': 5,
        'courseName': 'Objective Programming',
        'ects': 3,
        'semester': 3,
        'courseForm': ClassForm.LAB,
        'maxNumberOfStudent': 80,
        'rate': [{rating:3}, {rating:5}],
        'logoPath' : 'https://www.computerworld.pl/g1/news/thumbnails/2/8/281568_java_logo_jpg_90_resize_770x1000.jpg',
        'description': 'This is an example description of a course'
    },
    {
        'id': 6,
        'courseName': 'Functional Programming',
        'ects': 2,
        'semester': 3,
        'courseForm': ClassForm.LAB,
        'maxNumberOfStudent': 80,
        'rate': [{rating:3}, {rating:5}],
        'logoPath' : 'https://res.cloudinary.com/practicaldev/image/fetch/s--iCkOfD0L--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1024/1%2A709ugF12LLkYxvb839YNlg.png',
        'description': 'This is an example description of a course'
    },
    {
        'id': 8,
        'courseName': 'Physics',
        'ects': 6,
        'semester': 3,
        'courseForm': ClassForm.EXERCISE,
        'maxNumberOfStudent': 80,
        'rate': [{rating:3}, {rating:5}],
        'logoPath' : 'https://www.instantassignmenthelp.com/images/data/page_upload/images/physics.jpeg',
        'description': 'This is an example description of a course'
    },
    {
        'id': 9,
        'courseName': 'Introduction to Databases',
        'ects': 4,
        'semester': 3,
        'courseForm': ClassForm.LAB,
        'maxNumberOfStudent': 50,
        'rate': [{rating:3}, {rating:5}],
        'logoPath' : 'https://pixfeeds.com/images/topic/4144/1200-4144-databases-photo3.jpg',
        'description': 'This is an example description of a course'
    },
    ];
}