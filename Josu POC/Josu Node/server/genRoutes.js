const express = require('express')
const router = express.Router()
const contactmodel = require('./contactmodel')
const sql = require('mysql2')
const connection = require('./config')(sql)
const multer = require('multer')

const limits = { fileSize: 10 * 1024 * 1024 };
const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './upload');
  },
  filename: function (request, file, callback) {
        callback(null,  Date.now() + file.originalname);

    //console.log(file);
  }
});

const upload = multer({ limits: limits, storage: storage, fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|xlsx|png)$/)) {
        return cb(new Error('Only Word or Pdf format files are allowed!'));
		res.send({error:"Invaild Doc Type"});
    }
    cb(null, true);
  } }).single('file');
// Get Methods
router.get('/image',(req,res)=>{
	res.render('index')
})


router.post('/upload', (req, res, next)=>{
		upload(req, res, (err)=> {
			  if(err) {
			    console.log(err);
			    return;
			  }
			 	console.log(req.file.filename)
			  console.log('File Uploaded & saved to database');
				res.send("Uploaded Successfully")
	  })
})

//Download Excel API
router.post('/download', (req,res)=>{
			res.download('/','courseDocument.xlsx', (err)=>{
					if (err) {
						console.log(err)
					} else {
						console.log("File Downloaded Successfully")
					}
		});
})

//Test Route
router.get('/testing', (req, res) => {
	let date = Date.now();
	connection.query('SELECT user.UID from user inner join usercontact on user.uId = usercontact.uId where contactInfo = ?', ["ITTM"], (err, user) => {
		res.send(user + " on date " + date)
	})
})

// employers list
router.get('/emplist', (req, res) => {
	connection.query('SELECT * from user inner join usercontact on user.uId = usercontact.uId inner join contacttype on usercontact.cTypeID = contacttype.cTypeID where TypeId = "UT3"', (err, empl) => {
		let arr = JSON.parse(JSON.stringify(empl))
		let requiredDetails = ['companyName', 'industry', 'position', 'companyWebsite']
		res.send(jsonformatter(arr, requiredDetails))
	})
})

// Students list
router.get('/studlist', (req, res) => {
	connection.query('SELECT * FROM user inner join usercontact on user.uId = usercontact.uId inner join contacttype on usercontact.cTypeID = contacttype.cTypeID WHERE TypeId = "UT1"', (err, studl) => {
		let arr = JSON.parse(JSON.stringify(studl))
		let requiredDetails = ['firstName', 'lastName', 'collegeName', 'branch', 'passoutYear']
		res.send(jsonformatter(arr, requiredDetails))
	})
})

// Colleges list
router.get('/collist', (req, res) => {
	connection.query('SELECT * FROM user inner join usercontact on user.uId = usercontact.uId inner join contacttype on usercontact.cTypeID = contacttype.cTypeID WHERE TypeId = "UT2"', (err, coll) => {
		let arr = JSON.parse(JSON.stringify(coll))
		let requiredDetails = ['userName', 'collegeName', 'state', 'mobile' ]
		res.send(jsonformatter(arr, requiredDetails))
	})
})

//registeredColleges
router.get('/regcoll', (req, res)=>{
    connection.query("select usercontact.contactInfo from usercontact where usercontact.cTypeId ='CT6' and usercontact.uId in (select uId from user where typeId = 'UT2')", (err, result)=>{
    let col =  JSON.parse(JSON.stringify(result));
    let college =[];
    for(i=0;i<col.length;i++){
      college.push(col[i].contactInfo)
    }
    res.send(college);
    })
})

//College Specific
router.get('/colspec', (req, res) => {
	connection.query('SELECT * FROM user inner join usercontact on user.uId = usercontact.uId inner join contacttype on usercontact.cTypeID = contacttype.cTypeID WHERE user.userName in (SELECT user.userName FROM user inner join usercontact on user.uId = usercontact.uId  WHERE usercontact.contactInfo = ? and user.TypeId = "UT1" and usercontact.cTypeID ="CT6")', req.query.collegeName, (err, studl) => {
		let studlist = JSON.parse(JSON.stringify(studl));
		let requiredDetails = ['firstName', 'lastName', 'collegeName', 'branch', 'passoutYear']
		let list = jsonformatter(studlist, requiredDetails)
		res.send(list)
	})
})

// Student Job list Specific
router.get('/studjoblist', (req, res) => {
	connection.query('select * from user where userName = ?', req.headers.username, (err, user) => {
		connection.query(' select * from jobactivity inner join jobinfo on jobactivity.jobId = jobinfo.jobId inner join usercontact on usercontact.uId = jobinfo.empId and jobactivity.studentId = ? where usercontact.cTypeId = "CT15" or usercontact.cTypeId = "CT16"', user[0].uId , (err, jobs) => {
      if (jobs[0] != null) {
				let arr = JSON.parse(JSON.stringify(jobs))
				let requiredDetails = ['companyName', 'position','status', 'jobTitle']
				res.send(func(arr, requiredDetails))
			} else {
				res.send("No Jobs")
			}
		})
	})
})

//studentBranch
router.get('/branch', (req, res)=>{
    connection.query("select usercontact.contactInfo from usercontact where usercontact.cTypeId ='CT20' and usercontact.uId in (select uId from user where typeId = 'UT1')", (err, result)=>{
    let bran =  JSON.parse(JSON.stringify(result));
    let branch =[];
    for(i=0;i<bran.length;i++){
      branch.push(bran[i].contactInfo)
    }
    var unique = function(origArr) {
    var newArr = [],
        origLen = origArr.length,
        found, x, y;

    for (x = 0; x < origLen; x++) {
        found = undefined;
        for (y = 0; y < newArr.length; y++) {
            if (origArr[x] === newArr[y]) {
                found = true;
                break;
            }
        }
        if (!found) {
            newArr.push(origArr[x]);
        }
    }
    return newArr;
    }
    var arrUnique = unique(branch);
    res.send(arrUnique);
    })
})

//Edit details
router.get('/getdetails', (req, res)=>{
  connection.query('SELECT * FROM user inner join usercontact on user.uId = usercontact.uId inner join contacttype on usercontact.cTypeID = contacttype.cTypeID WHERE user.userName = ?', req.headers.username,  (err, det) => {
		let arr = JSON.parse(JSON.stringify(det))
		let details = jsonformatter1(arr)[0];
    delete details.uId;
    delete details.typeId;
    res.send(details);
	})
})

//View student profile/employer/college
router.get('/profileview', (req, res) => {
	let username = req.query.userName;
	connection.query('SELECT  * from user INNER JOIN usercontact ON usercontact.uId = user.uId INNER JOIN contacttype ON contacttype.cTypeID = usercontact.cTypeID where userName = ?', [username], (err, prof) => {
		if (prof[0] != null) {
			let arr = JSON.parse(JSON.stringify(prof))
			let requiredDetails = ['firstName', 'lastName', 'collegeName', 'branch', 'passoutYear']
			res.send(jsonformatter(arr, requiredDetails))
		}
	})
})

//Job Added
router.post('/addJob', (req, res) => {
	connection.query('select * from jobinfo', (err, jobs) => {
    jobs.sort(function(a, b) {
      if(parseInt((a.jobId.split('J'))[1]) > parseInt((b.jobId.split('J'))[1])) {
        return 1
      } else {
        return -1
      }
    })
		let jobinfolen = jobs.length
		if(jobinfolen > 0) {
			jobId = 'J' + (parseInt((jobs[jobinfolen-1].jobId.split('J'))[1]) + 1)
		} else {
			jobId = 'J0'
		}
		let jobtype;
		if (req.body.info.jobType == 'Immediate') {
		    jobtype = 'JT1'
		} else {
		    jobtype = 'JT2'
		}
		connection.query('select * from user where userName = ?', req.body.userName, (err, user) => {
			let jobdata = {
				jobId: jobId,
				jobTitle: req.body.info.jobTitle,
				jobDesc: req.body.info.jobDesc,
				empId: user[0].uId,
				Skills: req.body.info.skills,
				jobTypeId: jobtype
			}
			connection.query('insert into jobinfo set ?', jobdata, (err) => {
				if (err) res.send({"type":"error", "message":"Error inserting into pipelinejob holder"})
				else if(jobtype == 'JT2') {
					connection.query('select * from pipelinejobactivity', (err, doc) => {
						let id
						if(err) {
							res.send("Error")
						}
						if(doc.length != 0) {
							let len = doc.length
							id = 'P' + (parseInt((doc[len-1].pipelineJobId.split('P'))[1])+1)
						} else {
							id = 'P0'
						}
						let pjobj = {
							pipelineJobId: id,
							jobId: jobId,
							empId: user[0].uId,
							adminId: 'U11'
						}
						connection.query('insert into pipelinejobactivity set ?', pjobj, (err) => {
							if(err) {
								res.send({"type":"error", "message":"Error inserting into pipelinejob holder"})
							} else {
								res.send({"type":"success", "message":"Job Posted Successfully"})
							}
						})
					})
				} else if(jobtype == 'JT1') {
          connection.query('select userName from user where typeId = "UT1"', (err, result)=>{
            for (x = 0; x < result.length; x++) {
              let username = result[x].userName;
              connection.query('select * from user where userName = ?', username, (err, users) => {
                let jobassigned = {
                  jobId: jobId,
                  studentID: users[0].uId,
                  empId: jobs[0].empId,
                  status: "Sent"
                }
                connection.query('insert into jobactivity set ?', jobassigned, (err) => {
                  if (err) res.send({"type":"error", "message":"Error inserting job activity"})

                })
              })
            }
          })
        res.send({"type":"success", "message":"Job Posted Successfully"})
				}
			})
		})
	})
})

//Job Status Update
router.post('/jobstatus', (req, res) => {

		connection.query('update jobactivity set status = ? where studentId in (select uId from user where userName = ?) and jobId = ?', ["Applied", req.body.userName, req.body.jobId], (err) => {
			res.send("Applied")
	})
})

//Job Assigned to students
router.post('/jobsassigned', (req, res) => {
	connection.query('select * from jobinfo where jobId = ?', req.body.jobId, (err, jobs) => {
		if (jobs[0] != null) {
			for (x = 0; x < req.body.userName.length; x++) {
				let username = req.body.userName[x];
				connection.query('select * from user where userName = ?', username, (err, users) => {
					let jobassigned = {
						jobId: jobs[0].jobId,
						Student_UID: users[0].uId,
						empId: jobs[0].empId,
						Status: "Sent"
					}
					connection.query('insert into jobactivity set ?', jobassigned, (err) => {
						if (err) res.send("Error Inserting")
					})
				})
			}
			res.send("Job Activated Successfully")
		}
	})
})

//Get pipeline jobs
router.get('/pipelinejobs', (req, res) => {
	connection.query("select jobinfo.jobId,jobinfo.jobTitle, jobinfo.jobDesc, jobinfo.skills from jobinfo inner join pipelinejobactivity on pipelinejobactivity.jobId = jobinfo.jobId  where jobTypeId = 'JT2'", (err, pipelinejobs) => {
		if(pipelinejobs[0] != null) {
			let arr = JSON.parse(JSON.stringify(pipelinejobs))
      for(let i=0;i<arr.length;i++){
        arr[i].skills=arr[i].skills.split(',')
      }
			res.send(arr)
		} else {
			res.send('No jobs')
		}
	})
})

//Pipeline jobs sent to colleges by LA
router.post('/transferpipelinejobs', (req, res) => {
      let jobs = req.body.jobs;
      let coll = req.body.colleges;
      for(i=0; i<jobs.length;i++){
        for(j=0;j<coll.length;j++){
          let k = jobs[i]
          connection.query("select usercontact.uId from usercontact inner join user on usercontact.uId = user.uId where usercontact.contactInfo = ? and user.typeId = 'UT2'", coll[j], (err, result)=>{
            console.log(k);
            connection.query("select pipelinejobactivity.pipelineJobId from pipelinejobactivity inner join jobinfo on jobinfo.jobId = pipelinejobactivity.jobId where pipelinejobactivity.jobId=? ", k, (err, pipeid)=>{
              console.log(pipeid);
              let transfer = {
                collegeId : result[0].uId,
                pipelineJobId : pipeid[0].pipelineJobId
              }
              connection.query("insert into transferjob set ?", transfer, (err, result)=>{

              })
            })
          })
        }
      }
      res.send({"type":"success", "message":"Successfully Job Transfered"})
})

//college adding courses
router.post('/addCourse', (req, res) => {
	new Promise((resolve, reject) => {
		connection.query('SELECT CourseId FROM course', (err, doc) => {
			if(doc.length > 0) {
				cid = 'C' + (parseInt((doc[doc.length-1].courseId.split('C'))[1])+1)
			} else {
				cid = 'C0'
			}
			resolve(cid)
		})
	}).then((cid) => {
		let year = new Date().getFullYear()
		let month = new Date().getMonth()
		let day = new Date().getDate()
		let date = year+"-"+month+"-"+day
		let courseobj = {
			CreatedDate: date,
			CourseID: cid,
			CourseName: req.body.courseName,
			CourseDescription: req.body.description,
			CourseDuration: req.body.duration,
			Schedule: req.body.schedule,
			collegeId: req.body.uId
		}
		connection.query('INSERT INTO course set ?', courseobj, (err) => {
			if(err) {
				res.send("Error: " +err)
			} else {
				res.status('200').send("Added course")
			}
		})
	})
})

//show student their registered courses
router.get('/getRegisteredCourses', (req, res) => {
	connection.query('SELECT * FROM coursestudent INNER JOIN course ON coursestudent.CourseId = course.CourseId WHERE Student_UID = ?', req.query.uId, (err, courses) => {
		let requiredDetails = ['CourseName', 'CourseDescription', 'CourseDuration', 'Schedule']
		res.send(courses)
	})
})

// ************************** Post Methods ***********************//

//Edit profile
router.post('/editprofile', (req, res) => {
	let username = req.headers.username;
	connection.query('select * from user where userName = ?', username, (err, user) => {
		let ujson = JSON.parse(JSON.stringify(user[0]));
		let regO = req.body.info;
    console.log(regO);
		for (prop in regO) {
			let obj = {};
			let cinfo = regO[prop];
			for (proper in contactmodel) {
				if (proper == prop) {
					let ctype = contactmodel[proper];
					obj['cTypeID'] = ctype;
					obj['contactInfo'] = cinfo;
					connection.query('select * from usercontact where uId = ? and cTypeID = ?', [ujson.uId, ctype], (err, details) => {
						if (details.length == 0) {
							let obj = {
								cTypeID: ctype,
								uId: ujson.uId,
								contactInfo: cinfo
							}
							connection.query('insert into usercontact set ?', obj, (err) => {
								if (err) res.send("Insert Query Error")
							})
						} else {
							let obj = {
								cTypeID: ctype,
								uId: ujson.uId,
								contactInfo: cinfo
							}
							connection.query('update usercontact set contactInfo = ? where uId = ? and cTypeID = ?', [cinfo, ujson.uId, ctype], (err) => {
								if (err) res.send("Update Query Error");
							})
						}
					})
				} else {
					continue;
				}
			}
		}
    res.send("success")
	})
})

//Profile pic upload


//contact details formatter
let jsonformatter = (arr, reqdets) => {
	this.arr = arr
	let arr1 = []
	let count = 0
	this.reqdets = reqdets

	for (let j = 0; j < arr.length; j++) {
		if (arr1[count]) {
			((arr1[count])[(arr[j])["contactTypeInfo"]]) = (arr[j])["contactInfo"]
		} else {
			arr1[count] = {
				"uId": arr[j].uId,
				"userName": arr[j].userName,
				"typeId": arr[j].typeId,
				[(arr[j])["contactTypeInfo"]]: (arr[j])["contactInfo"]
			}
		}

		if (j + 1 != arr.length) {
			if (arr1[count].uId == arr[j + 1].uId) {
				continue;
			} else {
				count++;
			}
		}
	}

	return vimpfunc(arr1, reqdets)
}

//Stud specific job list intermediate func
var func = function(arr, reqdets) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i].cTypeId == 'CT15') {
			arr[i].companyName = arr[i].contactInfo
			delete arr[i].contactId
			delete arr[i].cTypeId
			delete arr[i].contactInfo
		} else if(arr[i].cTypeId == 'CT16') {
			arr[i].position = arr[i].contactInfo
			delete arr[i].contactId
			delete arr[i].cTypeId
			delete arr[i].contactInfo
		}
    arr[i].skills = (arr[i].skills.split(','))
	}

	let temparr = []
	for(let j = 0; j < arr.length; j++) {
		for(let k = 0; k < j+1; k++) {
			if(arr[k].activityId == arr[j].activityId) {
				for(prop in arr[k]) {
					if(!arr[j].hasOwnProperty(prop)) {
						arr[j][prop] = arr[k][prop]
						temparr.push(arr[j])
					}
				}
				break
			}
		}
	}
	return vimpfunc(temparr, reqdets)
}

//modify objects into array of array of objects with isPrimary
var vimpfunc = function(ephemeral_arr, reqdets) {
	let resultingarr = []
	for (let k = 0; k < ephemeral_arr.length; k++) {
		let tempobj = ephemeral_arr[k]
		resultingarr[k] = []
		for (prop in tempobj) {
			let added = false
			for (let l = 0; l < reqdets.length; l++) {
				if (prop == reqdets[l]) {
					resultingarr[k].push({
						[prop]: tempobj[prop],
						"isPrimary": true
					})
					added = true
				}
			}
			if (!added) {
				resultingarr[k].push({
					[prop]: tempobj[prop],
					"isPrimary": false
				})
			}
		}
	}
	return resultingarr
}

let jsonformatter1 = (arr) => {
	this.arr = arr
	let arr1 = []
	let count = 0

	for (let j = 0; j < arr.length; j++) {
		if (arr1[count]) {
			((arr1[count])[(arr[j])["contactTypeInfo"]]) = (arr[j])["contactInfo"]
		} else {
			arr1[count] = {
				"uId": arr[j].uId,
				"userName": arr[j].userName,
				"typeId": arr[j].typeId,
				[(arr[j])["contactTypeInfo"]]: (arr[j])["contactInfo"]
			}
		}

		if (j + 1 != arr.length) {
			if (arr1[count].uId == arr[j + 1].uId) {
				continue;
			} else {
				count++;
			}
		}
	}

	return arr1
}


module.exports = router
