const warehouseService = require('../../services/warehouseService');
const services = warehouseService.createService();

class WarehouseController {
    constructor () {}

    async handlePost (req, res, next) {
        try {
            const result = await services.postService(req.body);
            res.status(201).json({"Message": "Successfully created", "Item": result.ops[0]});
        } catch (err) {
            next(err);
        }
    }

    async handleGet (req, res, next) {
        try {
            const result = await services.getService(req.params.id);
            res.json({"Message": "Data get is successful", "Data": result});
        } catch (err) {
            next(err);
        }
    }

    async handleDelete (req, res, next) {
        try {
            const result = await services.deleteService(req.params.id);
            res.json({"Message": "successfully deleted", "result": result});
        } catch (err) {
            next(err);
        }
    }

    async handleUpdate (req, res, next) {
        try {
            const result = await  services.putService(req.params.id, req.body);
            res.json({"Message": "successfully updated", "result": result});
        } catch (err) {
            next(err);
        }
    }
}

module.exports.createController = () => new WarehouseController();