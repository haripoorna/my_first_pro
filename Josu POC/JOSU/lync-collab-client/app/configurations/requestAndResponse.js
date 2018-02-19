'use strict';

angular.module('lyncSchoolApp').constant(
    'requestAndResponse', {
        'domain': 'http://104.236.200.8:9000/',
        'registrationRequest': 'register',
        'activationRequest': 'activation',
        'signInRequest':'login',
        'userNameCheckRequest':'checkuser',
        'emailCheckRequest':'checkemail',
        'collegeListResponse':'routes/collist',
        'employerListResponse':'routes/emplist',
        'studentListResponse':'routes/studlist',
        'jobListResponse' : 'routes/studjoblist'
    }
);
