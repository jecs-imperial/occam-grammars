"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../index");
var _view = _interopRequireDefault(require("../view"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var FlorenceView = function(View) {
    _inherits(FlorenceView, View);
    function FlorenceView() {
        _classCallCheck(this, FlorenceView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(FlorenceView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Lexer", _index.FlorenceLexer);
        _defineProperty(_assertThisInitialized(_this), "Parser", _index.FlorenceParser);
        _defineProperty(_assertThisInitialized(_this), "heading", "Florence example");
        _defineProperty(_assertThisInitialized(_this), "readOnly", false);
        _defineProperty(_assertThisInitialized(_this), "initialContent", "\n  \nRule (Explosion)\n  Conclusion\n    A\n\n  ");
        return _this;
    }
    return FlorenceView;
}(_view.default);
_defineProperty(FlorenceView, "defaultProperties", {
    className: "florence"
});
exports.default = FlorenceView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZmxvcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZsb3JlbmNlTGV4ZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9yZW5jZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgTGV4ZXIgPSBGbG9yZW5jZUxleGVyO1xuXG4gIFBhcnNlciA9IEZsb3JlbmNlUGFyc2VyO1xuXG4gIGhlYWRpbmcgPSBcIkZsb3JlbmNlIGV4YW1wbGVcIjtcblxuICByZWFkT25seSA9IGZhbHNlO1xuXG4gIGluaXRpYWxDb250ZW50ID0gYFxuICBcblJ1bGUgKEV4cGxvc2lvbilcbiAgQ29uY2x1c2lvblxuICAgIEFcblxuICBgO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmxvcmVuY2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRWtCLE1BQWE7SUFHMUIsS0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTCxZQUFZO2NBQVosWUFBWTthQUFaLFlBQVk7OEJBQVosWUFBWTs7aUVBQVosWUFBWTt3REFDL0IsS0FBSyxHQU51QixNQUFhO3dEQVF6QyxNQUFNLEdBUnNCLE1BQWE7d0RBVXpDLE9BQU8sSUFBRyxnQkFBa0I7d0RBRTVCLFFBQVEsR0FBRyxLQUFLO3dEQUVoQixjQUFjLElBQUksaURBTWxCOzs7V0FmbUIsWUFBWTtFQUZoQixLQUFTO2dCQUVMLFlBQVksR0FpQnhCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsUUFBVTs7a0JBbEJKLFlBQVkifQ==