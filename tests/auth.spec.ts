import {test, expect} from '@playwright/test';
import AuthClient from '../api-client/AuthClient';

test('Health Check - API should be up and running', async ({ request }) => {
    const response = await request.get('/ping');
    expect(response.status()).toBe(201);
});

test('Should create token successfully', async ({ request }) => {
    const authClient = new AuthClient(request);
    const token = await authClient.createToken('admin', 'password123');
    expect(typeof token).toBe('string')
    expect(token.length).toBeGreaterThan(0)    
});

test('Should not create token', async ({ request }) => {
    const authClient = new AuthClient(request);
    await expect(authClient.createToken('fakeUser', 'fakePass')).rejects.toThrow()
});