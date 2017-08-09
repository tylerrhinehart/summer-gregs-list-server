function JobsService() {

    var jobs = JSON.parse(localStorage.getItem('jobs')) || []

    function saveJobs(){
        localStorage.setItem('jobs', JSON.stringify(jobs))
    }

    this.getJobs = function(cb) {
        cb(JSON.parse(JSON.stringify(jobs)))
    }

    this.addJob = function(job){
        jobs.push(job)
        saveJobs()
    }

    this.getJobs = function(cb) {
        cb(jobs)
    }

}