"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var TestContext_1 = __importDefault(require("./TestContext"));
/**
 * render with react-testing library adding redux context for unit test.
 * @example
 * const { dispatch, reduxStore, ...otherReactTestingLibraryHelper } = renderWithRedux(
 *     <TestedComponent />,
 *     initialState
 * );
 *
 * @param {ReactNode} component: The component you want to test in jsx
 * @param {Object} initialState: Optional initial state of the redux store
 * @param {Object} options: Render options, e.g. to use a custom container element
 * @return {{ dispatch, reduxStore, ...rest }} helper function to test rendered component.
 * Same as @testing-library/react render method with added dispatch and reduxStore helper
 * dispatch: spy on the redux stroe dispatch method
 * reduxStore: the redux store used by the tested component
 */
exports.default = (function (component, initialState, options) {
    if (initialState === void 0) { initialState = {}; }
    if (options === void 0) { options = {}; }
    var dispatch;
    var reduxStore;
    var renderResult = react_2.render(react_1.default.createElement(TestContext_1.default, { initialState: initialState, enableReducers: true }, function (_a) {
        var store = _a.store;
        dispatch = jest.spyOn(store, 'dispatch');
        reduxStore = store;
        return component;
    }), options);
    return __assign(__assign({}, renderResult), { rerender: function (newComponent) {
            return renderResult.rerender(react_1.default.createElement(TestContext_1.default, { initialState: initialState, enableReducers: true }, function (_a) {
                var store = _a.store;
                dispatch = jest.spyOn(store, 'dispatch');
                reduxStore = store;
                return newComponent;
            }));
        }, dispatch: dispatch,
        reduxStore: reduxStore });
});
