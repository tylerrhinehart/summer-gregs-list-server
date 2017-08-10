function HomeService() {

    var myHomes = []

    this.getHomes = function (cb) {
        $.get('/api/houses').then((homes) => {
            myHomes = homes
            cb(myHomes)
        })
    }

    this.addHome = function (home, cb) {
        $.post('/api/houses', home).then(() => {
            cb()
        })
    }
}