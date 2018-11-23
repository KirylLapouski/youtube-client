"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var searchQueryBuilder =
/*#__PURE__*/
function () {
  function searchQueryBuilder() {
    _classCallCheck(this, searchQueryBuilder);

    this.queryString = '';
    this.setDomain(onstants.YOUTUBE_API).setParams().setKey(constants.API_KEY).setOtherStuff();
  }

  _createClass(searchQueryBuilder, [{
    key: "setDomain",
    value: function setDomain(domain) {
      this.queryString += domain;
      return this;
    }
  }, {
    key: "setKey",
    value: function setKey(key) {
      this.queryString += "key=".concat(key);
      return this;
    }
  }, {
    key: "setParams",
    value: function setParams() {
      this.queryString += "?";
      return this;
    }
  }, {
    key: "setOtherStuff",
    value: function setOtherStuff() {
      this.queryString += '&type=video&part=snippet&maxResults=15';
      return this;
    }
  }, {
    key: "setQuery",
    value: function setQuery(query) {
      this.queryString += "&q=".concat(query);
      return this;
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this.queryString;
    }
  }]);

  return searchQueryBuilder;
}();

var _default = searchQueryBuilder;
exports.default = _default;