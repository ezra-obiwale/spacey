import transitions from './config/transitions';
import Job from './models/Job';
import Proposal from './models/Proposal';

export default class {
    #transitions = {}

    constructor(transitions) {
        if (typeof transitions !== 'object') {
            throw Error('Transitions must be an object');
        }

        this.#transitions = transitions;
    }

    changeState (model, newStatus) {
        if (!(model instanceof Job) && !(model instanceof Proposal)) {
            throw Error('Model must be a job or proposal');
        }

        if (typeof newStatus !== 'object') {
            throw Error('New status must be a status object');
        }

        if (!this.#validate(model, newStatus)) {
            throw Error(`Cannot change status to ${newStatus.label}`);
        }

        model.status = newStatus.value;
    }

    #validate (modelInstance, newStatus) {
        return !!this.#transitions[modelInstance.status]
            ?.find(({ model, status }) => modelInstance instanceof model && status.value === newStatus.value);
    }
}