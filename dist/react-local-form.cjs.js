'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

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
      values: {},
      errors: {}
    }, _this.handleSubmit = function (e) {
      var onSubmit = _this.props.onSubmit;
      var _this$state = _this.state,
          errors = _this$state.errors,
          values = _this$state.values;
      e.preventDefault();
      onSubmit({
        values: values,
        errors: errors
      });
    }, _this.handleSetValues = function () {
      var newValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var rules = _this.props.rules;

      _this.setState(function (_ref) {
        var values = _ref.values,
            errors = _ref.errors;

        var mergedValues = _objectSpread({}, values, newValues);

        var mergedErrors = Object.entries(rules).reduce(function (errors, _ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              property = _ref3[0],
              rules = _ref3[1];

          return _objectSpread({}, errors, _defineProperty({}, property, rules.map(function (rule) {
            return rule(mergedValues[property], mergedValues);
          }).filter(Boolean)));
        }, errors);
        return {
          values: mergedValues,
          errors: mergedErrors
        };
      });
    }, _temp));
  }

  _createClass(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var values = this.props.values;
      this.handleSetValues(values);
    }
  }, {
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
          setValues: this.handleSetValues
        }
      }, React__default.createElement("form", _extends({}, props, {
        onSubmit: this.handleSubmit
      }), render ? render({
        values: values,
        errors: errors,
        setValues: this.handleSetValues
      }) : children));
    }
  }]);

  return Form;
}(React.Component);

Form.defaultProps = {
  values: {},
  rules: []
};

var FormItem = function FormItem(_ref4) {
  var _ref4$contextProps = _ref4.contextProps,
      values = _ref4$contextProps.values,
      errors = _ref4$contextProps.errors,
      setValues = _ref4$contextProps.setValues,
      name = _ref4.name,
      children = _ref4.children;
  return React__default.cloneElement(children, _objectSpread({
    value: values[name],
    error: (errors[name] || [])[0],
    errors: errors[name] || [],
    onChange: function onChange(e) {
      setValues(_defineProperty({}, name, e.target ? e.target.value : e));
      e.persist();
    }
  }, children.props));
};

var form = {
  Form: Form,
  FormItem: connect(FormItem)
};

module.exports = form;
