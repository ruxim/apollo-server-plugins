import {ApolloServerPlugin,
	BaseContext,
	GraphQLRequestContext,
	GraphQLRequestContextWillSendResponse,
	GraphQLRequestListener} from 'apollo-server-plugin-base';
import {CookieOptions, Response} from 'express';

export interface Cookie {
	name: string;
	value: string;
	options: CookieOptions;
};

export interface CustomRequestContext extends BaseContext {
	cookies: Cookie[];
	res: Response;
}

export const CookiePlugin: ApolloServerPlugin = {
	async requestDidStart(context: GraphQLRequestContext): Promise<GraphQLRequestListener<CustomRequestContext>> {
		return {
			async willSendResponse(
				context: GraphQLRequestContextWillSendResponse<CustomRequestContext>
			) {
				const {cookies = [], res} = context.context;
				cookies.forEach((cookie) => {
					res.cookie(cookie.name, cookie.value, cookie.options);
				});
			}
		};
	}
};
