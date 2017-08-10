function AutoService() {

    // var autos = JSON.parse(localStorage.getItem('autos')) || []
    var myAutos = []

    // function saveAutos(){
    //     localStorage.setItem('autos', JSON.stringify(autos))
    // }

    this.getAutos = function getAutos(callback) {
        $.get('/api/autos').then((autos) => {
            myAutos = autos
            callback(myAutos)
        })
    }

    // this.getAutos = function (cb) {
    //     cb(JSON.parse(JSON.stringify(autos)))
    // }

    this.addAuto = function (auto, cb) {
        $.post('/api/autos', auto).then(() => {
            cb()
        })
    }

    // this.addAuto = function (auto, cb) {
    //     $.post('/api/autos', auto)
    //         .then(function () {
    //             $.get('/api/autos', function (data) {
    //                 console.log(data)
    //                 cb()
    //             })
    //         })
    // }

}