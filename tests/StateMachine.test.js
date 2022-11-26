import { JOB, PROPOSAL } from '../src/config/states';
import transitions from '../src/config/transitions';
import Job from '../src/models/Job';
import Proposal from '../src/models/Proposal';
import StateMachine from '../src/StateMachine';

const stateMachine = new StateMachine(transitions);

test('transiting job from CREATED to PUBLISHED is successful', () => {
    const job = new Job();

    job.status = JOB.CREATED.value;

    stateMachine.changeState(job, JOB.PUBLISHED);

    expect(job.status).toBe(JOB.PUBLISHED.value);
})

test('transiting job from PUBLISHED to CANCELED throws an error', () => {
    const job = new Job();

    job.status = JOB.PUBLISHED.value;

    expect(() => stateMachine.changeState(job, JOB.CANCELED))
        .toThrow(`Cannot change status to ${JOB.CANCELED.label}`);
})

test('transiting proposal from CREATED to ACCEPTED is successful', () => {
    const proposal = new Proposal();

    proposal.status = PROPOSAL.CREATED.value;

    stateMachine.changeState(proposal, PROPOSAL.ACCEPTED);

    expect(proposal.status).toBe(PROPOSAL.ACCEPTED.value);
})

test('transiting proposal from ACCEPTED to CREATED throws an error', () => {
    const proposal = new Proposal();

    proposal.status = PROPOSAL.ACCEPTED.value;

    expect(() => stateMachine.changeState(proposal, PROPOSAL.CREATED))
        .toThrow(`Cannot change status to ${PROPOSAL.CREATED.label}`);
})

test('transiting job with proposal status throws an error', () => {
    const job = new Job();

    job.status = JOB.PUBLISHED.value;

    expect(() => stateMachine.changeState(job, PROPOSAL.CREATED))
        .toThrow(`Cannot change status to ${PROPOSAL.CREATED.label}`);
})