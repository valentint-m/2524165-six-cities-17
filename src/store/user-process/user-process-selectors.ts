import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.USER].authorizationStatus;

export const getEmail = (state: State): string => state[NameSpace.USER].email;

export const getLoggingOutStatus = (state: State): boolean => state[NameSpace.USER].isLoggingOut;
