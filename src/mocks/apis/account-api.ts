import { RestRequest, ResponseComposition, RestContext } from 'msw';

export const postSignup = (
    req: RestRequest,
    res: ResponseComposition,
    ctx: RestContext
) => {
    return res(ctx.delay(3000), ctx.status(204));
};
