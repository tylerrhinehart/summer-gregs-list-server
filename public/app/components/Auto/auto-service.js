function AutoService() {

    var myAutos = []

    function logError(err) {
        console.error('Its broken', err)
    }

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

        $.ajax({
            contentType: 'application/json',
            method: 'DELETE',
            url: '/api/autos/'+autoId
        })
        .then(() => {
            console.log('Successfully removed')
            cb()
        })
        .fail(logError)
    }

    this.editAuto = function (autoId, cb) {
        var auto = myAutos.find(auto => auto._id == autoId)
        auto.price = 1
        if(!auto) {
            return
        }

        $.ajax({
            contentType: 'application/json',
            method: 'PUT',
            url: '/api/autos/'+autoId,
            data: JSON.stringify(auto)
        })
        .then(() => {
            console.log('Successfully edited')
            cb()
        })
        .fail(logError)
    }

}