'use strict';

angular.module('lyncSchoolApp').constant(
    'requestAndResponse', {
        'domain': 'http://192.168.2.191:9000/',
        'registrationRequest': 'register',
        'activationRequest': 'activation',
        'signInRequest':'login',
        'userNameCheckRequest':'checkuser',
        'emailCheckRequest':'checkemail',
        'collegeListResponse':'routes/collist',
        'employerListResponse':'routes/emplist',
        'studentListResponse':'routes/studlist'
    }
);
