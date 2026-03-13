import { INodeParams, INodeCredential } from '../src/Interface'

class WorkdayApi implements INodeCredential {
    label: string
    name: string
    version: number
    description: string
    inputs: INodeParams[]

    constructor() {
        this.label = 'Workday API'
        this.name = 'workdayApi'
        this.version = 1.0
        this.inputs = [
            {
                label: 'Workday Tenant Access Token',
                name: 'accessToken',
                type: 'password'
            }
        ]
    }
}

module.exports = { credClass: WorkdayApi }
