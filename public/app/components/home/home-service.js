function HomeService() {

    var homes = JSON.parse(localStorage.getItem('homes')) || []

    function saveHomes(){
        localStorage.setItem('homes', JSON.stringify(homes))
    }

    this.getHomes = function(cb) {
        cb(JSON.parse(JSON.stringify(homes)))
    }

    this.addHome = function(home){
        homes.push(home)
        saveHomes()
    }

    this.getHomes = function(cb) {
        cb(homes)
    }


}