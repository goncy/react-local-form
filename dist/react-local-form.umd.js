(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global['react-local-form'] = factory(global.React));
}(this, (function (React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
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

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var _React$createContext = React__default.createContext({}),
      Provider = _React$createContext.Provider,
      Consumer = _React$createContext.Consumer;

  var getValue = function getValue(data) {
    return data.target ? data.target.value : data;
  };

  var mapRules = function mapRules(rules, value) {
    return rules.map(function (rule) {
      return rule(value);
    }).filter(Boolean);
  };

  var mapErrors = function mapErrors(obj) {
    return Object.entries(obj).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return {
        field: key,
        errors: value
      };
    }).filter(function (_ref3) {
      var errors = _ref3.errors;
      return Boolean(errors.length);
    });
  };

  var connect = function connect(Component) {
    return function (ownerProps) {
      return React__default.createElement(Consumer, null, function (contextProps) {
        return React__default.createElement(Component, _extends({
          contextProps: contextProps
        }, ownerProps));
      });
    };
  };

  var Form =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Form, _Component);

    function Form() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, Form);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
        values: _this.props.values || {},
        errors: {}
      }, _this.onSubmit = function (e) {
        var onSubmit = _this.props.onSubmit;
        var _this$state = _this.state,
            errors = _this$state.errors,
            values = _this$state.values;
        e.preventDefault();
        onSubmit({
          values: values,
          errors: mapErrors(errors)
        });
      }, _temp));
    }

    _createClass(Form, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            render = _this$props.render,
            props = _objectWithoutProperties(_this$props, ["children", "render"]);

        var _this$state2 = this.state,
            values = _this$state2.values,
            errors = _this$state2.errors;
        return React__default.createElement(Provider, {
          value: {
            values: values,
            errors: errors,
            setContext: this.setState.bind(this)
          }
        }, React__default.createElement("form", _extends({}, props, {
          onSubmit: this.onSubmit
        }), render ? render({
          values: values,
          errors: mapErrors(errors)
        }) : children));
      }
    }]);

    return Form;
  }(React.Component);

  var FormItem =
  /*#__PURE__*/
  function (_Component2) {
    _inherits(FormItem, _Component2);

    function FormItem() {
      var _getPrototypeOf3;

      var _temp2, _this2;

      _classCallCheck(this, FormItem);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _possibleConstructorReturn(_this2, (_temp2 = _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(FormItem)).call.apply(_getPrototypeOf3, [this].concat(args))), _this2.validate = function (value) {
        var _this2$props = _this2.props,
            setContext = _this2$props.contextProps.setContext,
            rules = _this2$props.rules,
            name = _this2$props.name;
        setContext(function (_ref4) {
          var errors = _ref4.errors;
          return {
            errors: _objectSpread({}, errors, _defineProperty({}, name, mapRules(rules, value)))
          };
        });
      }, _this2.update = function (value) {
        var _this2$props2 = _this2.props,
            setContext = _this2$props2.contextProps.setContext,
            name = _this2$props2.name;
        setContext(function (_ref5) {
          var values = _ref5.values;
          return {
            values: _objectSpread({}, values, _defineProperty({}, name, value))
          };
        });
      }, _temp2));
    }

    _createClass(FormItem, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props2 = this.props,
            values = _this$props2.contextProps.values,
            validate = _this$props2.validate,
            name = _this$props2.name;

        if (validate === "always") {
          this.validate(values[name]);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props3 = this.props,
            _this$props3$contextP = _this$props3.contextProps,
            values = _this$props3$contextP.values,
            errors = _this$props3$contextP.errors,
            name = _this$props3.name,
            children = _this$props3.children;
        return React__default.cloneElement(children, {
          value: values[name],
          error: (errors[name] || [])[0],
          onChange: function onChange(e) {
            var value = getValue(e);

            _this3.validate(value);

            _this3.update(value);

            e.persist();
          }
        });
      }
    }]);

    return FormItem;
  }(React.Component);

  FormItem.defaultProps = {
    rules: [],
    validate: "change"
  };
  var form = {
    Form: Form,
    FormItem: connect(FormItem)
  };

  return form;

})));
