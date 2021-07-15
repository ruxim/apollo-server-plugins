export const CookiePlugin = {
	requestDidStart() {
		return {
			willSendResponse(requestContext) {
				const {cookies = [], res} = requestContext.context;

				if (!Array.isArray(cookies)) {
					throw new Error('cookies array is required in context object');
				}

				cookies.forEach(({key, value}) => {
					res.cookie(key, value, {
						maxAge: 1440 * 60000 * 30,
						httpOnly: true
					});
				});

				return requestContext;
			}
		};
	}
};
