export declare const finalizeFactory: (tasks: any, accumulations: any) => (key: any, actionCreator: any) => Generator<import("redux-saga/effects").CallEffect<true> | import("redux-saga/effects").PutEffect<any>, void, unknown>;
export declare const accumulateFactory: (tasks: any, accumulations: any, finalize: any) => (action: any) => Generator<import("redux-saga/effects").CancelEffect | import("redux-saga/effects").ForkEffect<unknown>, void, any>;
export default function (): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
