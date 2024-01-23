//Archivo para mensajes de respuestas si fue exitoso o no una operacion

exports.success = (req, res, mensaje= 'Operacion exitosa', status=200) =>{
    res.status(status).send({
        error:false,
        status: status,
        body: mensaje
    })
}

exports.success = (req, res, mensaje= 'Error en operacion', status=500) =>{
    res.status(status).send({
        error:true,
        status: status,
        body: mensaje
    })
}