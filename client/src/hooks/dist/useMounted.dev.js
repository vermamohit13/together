"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMounted;

var _react = require("react");

function useMounted() {
  var mounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return mounted;
}