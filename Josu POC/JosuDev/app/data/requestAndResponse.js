'use strict';

angular.module('lyncDigitalApp').constant(
    'requestAndResponse', {
        'domain': 'http://localhost:9000/',
        'registrationRequest': 'register',
        'setPassword': 'setPassword',
        'resetPassword': 'resetPassword',
        'signInRequest': 'login',
        'forgotPasswordEmailRequest': 'forgotPassword',
        'userNameCheckRequest': 'checkuser',
        'emailCheckRequest': 'checkemail',
        'collegeListResponse': 'routes/collist',
        'employerListResponse': 'routes/emplist',
        'studentListResponse': 'routes/studlist',
        'jobListResponse': 'routes/studjoblist',
        'jobPostRequest' : 'routes/addJob',
        'jobPostStatus' : 'routes/jobstatus',
        'pipelinejobs': 'routes/pipelinejobs',
        'transferPipeLine': 'routes/transferpipelinejobs',
        'collegeLists': 'routes/regcoll',
        'branchList' : 'routes/branch',
        'editProfileDetails' : 'routes/getdetails',
        'updateProfile' : 'routes/editprofile',
        'uploadPicture' : 'routes/upload'
    }
);
