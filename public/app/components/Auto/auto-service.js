function AutoService() {

    // var autos = JSON.parse(localStorage.getItem('autos')) || []
    var autos = $.get('localhost:3000/api/autos') || []

    // function saveAutos(){
    //     localStorage.setItem('autos', JSON.stringify(autos))
    }

    this.getAutos = function(cb) {
        cb(JSON.parse(JSON.stringify(autos)))
    }

    this.addAuto = function(auto){
        $.post('localhost:3000/api/autos', auto)
        // autos.push(auto)
        // saveAutos()
    }

    this.getAutos = function(cb) {
        cb(autos)
    }

}