"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _close = _interopRequireDefault(require("./assets/close.svg"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Modale = props => {
  return /*#__PURE__*/_react.default.createElement(ModaleDiv, {
    style: props.styleModaleBackground
  }, /*#__PURE__*/_react.default.createElement(ModaleContent, {
    style: props.styleModale
  }, /*#__PURE__*/_react.default.createElement(Content, {
    style: props.styleModaleContent
  }, props.content), /*#__PURE__*/_react.default.createElement(IMG, {
    src: _close.default,
    alt: "close",
    onClick: props.hideModale
  })));
};
var _default = Modale;
exports.default = _default;
const ModaleDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: auto;\n  height: auto;\n  z-index: 10;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n  ", "\n  @keyframes fadeIn {\n    0% {\n      background-color: rgba(0, 0, 0, 0);\n    }\n    100% {\n      background-color: rgba(0, 0, 0, 0.8);\n    }\n  }\n"])), props => props.animation && {
  animation: 'fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
});
const ModaleContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: auto;\n  height: auto;\n  position: absolute;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);\n  padding: 1rem;\n  border-radius: .5rem;\n  background-color: white;\n  top: 40vh;\n  ", "\n  @keyframes roadRunnerIn {\n    0% {\n      transform: translateX(-1500px) skewX(30deg) scaleX(1.3);\n    }\n    70% {\n      transform: translateX(30px) skewX(0deg) scaleX(0.9);\n    }\n    100% {\n      transform: translateX(0px) skewX(0deg) scaleX(1);\n    }\n  }\n"])), props => props.animation && {
  transform: 'translateX(-1500px)',
  animation: 'roadRunnerIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
});
const Content = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: black;\n  line-height: 1.5rem;\n"])));
const IMG = _styledComponents.default.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -0.8rem;\n  right: -0.8rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  cursor: pointer;\n"])));