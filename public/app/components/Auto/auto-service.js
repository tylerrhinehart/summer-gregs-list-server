function AutoService() {

    var myAutos = []

    this.getAutos = function getAutos(cb) {
        $.get('/api/autos').then((autos) => {
            myAutos = autos
            cb(myAutos)
        })
    }

    this.addAuto = function (auto, cb) {
        $.post('/api/autos', auto).then(() => {
            cb()
        })
    }

    this.deleteAuto = function (autoId, cb) {
        $.remove('/api/autos/' + autoId).then(() => {
            cb(myAutos)
        })
    }
}