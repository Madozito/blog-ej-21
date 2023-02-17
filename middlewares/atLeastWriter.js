//Escritor 300

function atLeastWriter(req,res,next) {
    if (req.user.roleCode>= 200) {
        next()
        
    } else{
        res.send("No tiene permisos para crear un usuario")
    }

    
}

module.exports = atLeastWriter;