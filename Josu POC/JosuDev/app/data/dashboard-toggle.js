'use strict';

angular.module('lyncDigitalApp').constant('dashboardToggle', {
    "toggleInfo": {
        "employerTabs": [{
            "id": "applications",
            "label": "APPLICATIONS"
        }, {
            "id": "studentList",
            "label": "STUDENT-LIST"
        }, {
            "id": "collegeList",
            "label": "COLLEGE-LIST"
        }],
        "studentTabs": [{
            "id": "employerList",
            "label": "EMPLOYER-LIST"
        }, {
            "id": "jobList",
            "label": "JOB-LIST"
        }],
        "collegeTabs": [{
            "id": "employerList",
            "label": "EMPLOYER-LIST"
        }, {
            "id": "studentList",
            "label": "STUDENT-LIST"
        }],
        "adminTabs": [{
            "id": "applicationList",
            "label": "APPLICATIONS"
        }, {
            "id": "employerList",
            "label": "EMPLOYER-LIST"
        }, {
            "id": "studentList",
            "label": "STUDENT-LIST"
        }, {
            "id": "collegeList",
            "label": "COLLEGE-LIST"
        }],
        "profilePicture": {
            "employer": "images/profilePic-employer.png",
            "student": "images/profilePic-student.png",
            "college": "images/profilePic-college.png"
        }
    }
});
