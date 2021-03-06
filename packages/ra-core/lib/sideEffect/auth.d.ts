import { AuthProvider } from '../types';
declare const _default: (authProvider?: AuthProvider) => () => any;
export default _default;
export declare const handleLogin: (authProvider: AuthProvider) => (action: any) => Generator<any, void, unknown>;
export declare const handleCheck: (authProvider: AuthProvider) => (action: any) => Generator<import("redux-saga/effects").CallEffect<string | void> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, unknown>;
export declare const handleLogout: (authProvider: AuthProvider) => (action: any) => Generator<import("redux-saga/effects").CallEffect<string | void> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, unknown>;
export declare const handleFetchError: (authProvider: AuthProvider) => (action: any) => Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").CallEffect<string | void> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, unknown>;
