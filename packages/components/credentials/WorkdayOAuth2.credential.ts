import { INodeParams, INodeCredential } from '../src/Interface'

class WorkdayOAuth2 implements INodeCredential {
    label: string
    name: string
    version: number
    inputs: INodeParams[]
    description: string

    constructor() {
        this.label = 'Workday OAuth2'
        this.name = 'workdayOAuth2'
        this.version = 1.0
        this.inputs = [
            {
                label: 'Authorization URL',
                name: 'authorizationUrl',
                type: 'string',
                description: 'Agent Gateway Host/Tenant Alias',
                default: 'https://agent.us.wcp.workday.com/auth/authorize/wday_wcpdev25'
            },
            {
                label: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'string',
                default: 'https://agent.us.wcp.workday.com/auth/oauth2/wday_wcpdev25/token'
            },
            {
                label: 'Client ID',
                name: 'clientId',
                type: 'string'
            },
            {
                label: 'Client Secret',
                name: 'clientSecret',
                type: 'password'
            },
            {
                label: 'Additional Parameters',
                name: 'additionalParameters',
                type: 'string',
                default: '',
                hidden: true
            }
        ]
    }
}

module.exports = { credClass: WorkdayOAuth2 }
