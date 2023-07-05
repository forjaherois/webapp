import { rest } from 'msw';
import { postSignup } from './apis/account-api';

export const handlers = [rest.post('/account', postSignup)];
