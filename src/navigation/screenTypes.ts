export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  WELCOME = 'WELCOME',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',

  AUTHORIZE = 'AUTHORIZE',
  HOME = 'HOME',
  TASK = 'TASK',
  GRAPHIC = 'GRAPHIC',
  PROFILE = 'PROFILE',
}

export type UnAuthorizeParamsList = {
  [APP_SCREEN.WELCOME]: undefined;
  [APP_SCREEN.LOGIN]: undefined;
  [APP_SCREEN.REGISTER]: undefined;
};
export type AuthorizeParamsList = {
  [APP_SCREEN.HOME]: undefined;
  [APP_SCREEN.TASK]: undefined;
  [APP_SCREEN.GRAPHIC]: undefined;
  [APP_SCREEN.PROFILE]: undefined;
};
export type RootStackParamList = {
  [APP_SCREEN.UN_AUTHORIZE]: UnAuthorizeParamsList;

  [APP_SCREEN.AUTHORIZE]: UnAuthorizeParamsList;
};
