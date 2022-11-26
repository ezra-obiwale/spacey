import Job from '../models/Job';
import Proposal from '../models/Proposal';
import { JOB, PROPOSAL } from './states';

export default {
    [JOB.CREATED.value]: [
        {
            status: JOB.PUBLISHED,
            model: Job
        },
        {
            status: JOB.CANCELED,
            model: Job
        }
    ],
    [JOB.PUBLISHED.value]: [
        {
            status: JOB.CREATED,
            model: Job
        },
        {
            status: JOB.PROPOSED,
            model: Job
        }
    ],
    [JOB.PROPOSED.value]: [
        {
            status: JOB.PUBLISHED,
            model: Job
        },
        {
            status: JOB.CONTRACTED,
            model: Job
        }
    ],
    [PROPOSAL.CREATED.value]: [
        {
            status: PROPOSAL.ACCEPTED,
            model: Proposal
        },
        {
            status: PROPOSAL.REJECTED,
            model: Proposal
        },
        {
            status: PROPOSAL.ACCEPTED_OTHER,
            model: Proposal
        }
    ]
}