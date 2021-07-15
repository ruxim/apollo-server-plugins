import {CookieOptions} from 'express';

export interface Cookie {
	name: string;
	value: string;
	options: CookieOptions;
}

export interface CustomRequestContext {
	context: {
		cookies: Cookie[];
		res: any;
	};
}

export const CookiePlugin = {
	requestDidStart() {
		return {
			willSendResponse(requestContext: CustomRequestContext) {
				const {cookies = [], res} = requestContext.context;
				cookies.forEach((cookie) => {
					res.cookie(cookie.name, cookie.value, cookie.options);
				});
				return requestContext;
			}
		};
	}
};
