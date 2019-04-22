const actionsService = require('../../services/actionsService');
const services = actionsService.createService();

class ActionsController {
    constructor () {}

    handlePost (req, res, next) {
        let operationResult = null;
        switch (req.body.action) {
            case "takeGrainFromField":
                operationResult = services.takeGrainFromField(req.body);
            case "moveGrainToWarehouse":
                operationResult = services.moveGrainToWarehouse(req.body);
        }
        operationResult.then(result => {
            res.status(200).json({"result": result});
        })
            .catch(err => next(err));
    }
}

function createController (options) {
    return new ActionsController(options);
}

module.exports.createController = createController;