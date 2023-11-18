import Request from "../models/Request.js";

export default class RequestController {
    async getAll(req, res) {
       const request = await Request.findAll();
       res.send(request);
   }

   async getBynombre(req, res) {
       const request = await Request.findAll({
           where: {
               nombre: req.params.nombre
           }
       });
       res.send(request);
   }

   async get(req, res) {
       const request = await Request.findByPk(req.params.requestId);
       res.send(request);
   }

   async create(req, res) {
       const request = await Request.create({
           nombre: req.body.nombre,
           rut: req.body.rut,
           estado: req.body.estado,
           valor_credito: req.body.valor_credito,
           tasa: req.body.tasa,
           plazo: req.body.plazo
       });
       res.send(request);
   }

   async update(req, res) {
       const request = await Request.findByPk(req.params.requestId);
       user.update({nombre: req.body.nombre, rut: req.body.rut, fecha: req.body.fecha, estado: req.body.estado, valor_credito: req.body.valor_credito, tasa: req.body.tasa, plazo: req.body.plazo});
       res.send(request);
   }

   async delete(req, res) {
       await Request.destroy({where: {id: req.params.userId}});
       res.send({status: "ok"});
   }
};