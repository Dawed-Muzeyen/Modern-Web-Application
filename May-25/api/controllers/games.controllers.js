
//const gamesData= require(".././data/games.json");
//const students= require(".././data/school.json");
module.exports.getAllGames= function(req, res) {
    
    console.log("JSON GET received");
    res.status(200).json("gamesData");
    };

    module.exports.product= function(req, res) {
        const firstnumber= req.params.firstnumber;
        const result = parseInt(firstnumber) + 10;
        console.log("the result of the multiplication is  ", result);
        res.status(200).json(result);
        };

        module.exports.getAllStudents= function(req, res) {
    
            console.log("JSON GET received");
            res.status(200).json("students");
            };

            module.exports.getOneStudent= function(req, res) {
                const studId= req.params.studId;
                const theStud= students[studId];
                console.log("GET student with studId ", studId);
                res.status(200).json(theStud);
                };
                
        