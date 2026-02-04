import { APIRequestContext } from "@playwright/test";

export class AuthClient {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async createToken(username: string, password: string) {
    const response = await this.request.post('/auth', {
        data: {
            username: username,
            password: password
        }
    });
    
    if (!response.ok()) {
        throw new Error(`Auth failed with status: ${response.status()}`);
    }
    
    const body = await response.json();
    
    if (!body.token) {
        throw new Error('No token in response');
    }
    
    return body.token;
}
}
export default AuthClient;