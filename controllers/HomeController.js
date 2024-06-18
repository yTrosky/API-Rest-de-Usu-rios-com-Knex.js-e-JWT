class HomeController{

    async index(req, res){
        res.send("App is running...");
    }

}

module.exports = new HomeController();