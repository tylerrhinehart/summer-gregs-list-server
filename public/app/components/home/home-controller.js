function HomeController() {
    var homeService = new HomeService()

    function drawHomes(homes) {
        var template = ''
        homes.forEach((home) => {
            template += `
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card">
                        <img class="card-img-top listing-image" src="${home.img}" alt="placeholder image">
                        <div class="card-block">
                            <h4>Description: ${home.description}</h4>
                            <h4>Sq ft: ${home.sqft}</h4>
                            <h4>Price: $${home.price}</h4>
                        </div>
                    </div>
                </div>
            `
        })
        document.getElementById('results').innerHTML = template
    }

    this.addHome = function(event){
        event.preventDefault()
        var form = event.target

        var home = {
            description: form.description.value,
            sqft: form.sqft.value,
            price: form.price.value,
            img: form.img.value
        }

        homeService.addHome(home)
        homeService.getHomes(drawHomes)
        form.reset()
    }

    this.addButton = function() {
        var template = '<button type="button" class="btn btn-primary" onclick="app.controllers.homeController.addForm()">Add New Home</button>'
        document.getElementById('place-form').innerHTML = template
    }

    this.addForm = function() {
        var template = ''
        template += `
            <div class="row">
                <div class="col-xs-12">
                    <form onsubmit="app.controllers.homeController.addHome(event)">
                        <div class="form-group">
                            <input class="form-control" type="text" name="description" placeholder="Description" required>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="number" name="sqft" placeholder="Sq ft">
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="number" name="price" placeholder="Price">
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="text" name="img" placeholder="image">
                        </div>
                        <button type="submit" class="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        `
        document.getElementById('place-form').innerHTML = template
        homeService.getHomes(drawHomes)
    }

    // homeService.getHomes(drawHomes)

}