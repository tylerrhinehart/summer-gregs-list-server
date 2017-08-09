function AutoService() {

    var autos = JSON.parse(localStorage.getItem('autos')) || []

    function saveAutos(){
        localStorage.setItem('autos', JSON.stringify(autos))
    }

    this.getAutos = function(cb) {
        cb(JSON.parse(JSON.stringify(autos)))
    }

    this.addAuto = function(auto){
        autos.push(auto)
        saveAutos()
    }

    this.getAutos = function(cb) {
        cb(autos)
    }

}