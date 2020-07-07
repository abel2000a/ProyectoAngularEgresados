import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

const baseUrl: any =  'https://laravelegresados-12.herokuapp.com/api/';

export  const AppConfig: any = {

	routes:{
		error404: '404'
	},

	
	loginUrl: baseUrl+'login',

	signupUrl: baseUrl+'signup',

	sendPasswordResetLinkUrl: baseUrl+'sendPasswordResetLink',

	resetPasswordUrl: baseUrl+'resetPassword'

}