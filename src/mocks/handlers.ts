import { rest } from 'msw';
import { postSignup } from './account-api';

export const handlers = [rest.post('/account', postSignup)];
