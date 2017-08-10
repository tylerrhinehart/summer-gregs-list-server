function JobsService() {

    var myJobs = []

    this.getJobs = function (cb) {
        $.get('/api/jobs').then((jobs) => {
            myJobs = jobs
            cb(myJobs)
        })
    }

    this.addJob = function (job, cb) {
        $.post('/api/jobs', job).then(() => {
            cb()
        })
    }
}