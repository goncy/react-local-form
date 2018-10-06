import React, {Component} from "react";

const {Provider, Consumer} = React.createContext({});

const getValue = data => {
  return data.target ? data.target.value : data;
};

const mapRules = (rules, value) =>
  rules.map(rule => rule(value)).filter(Boolean);

const connect = Component => ownerProps => (
  <Consumer>
    {contextProps => <Component contextProps={contextProps} {...ownerProps} />}
  </Consumer>
);

class Form extends Component {
  static defaultProps = {
    rules: [],
    onError: _ => _,
    onSubmit: _ => _,
  };

  state = {
    values: this.props.values || {},
    formErrors: [],
    fieldErrors: {},
  };

  onSubmit = e => {
    const {onSubmit, onError, rules} = this.props;
    const {fieldErrors, values} = this.state;

    e.preventDefault();

    const _fieldErrors = Object.values(fieldErrors).flat();
    const _formErrors = mapRules(rules, values).flat();
    const errors = [_fieldErrors, _formErrors].flat();

    this.setState({formErrors: _formErrors});

    errors.length === 0 ? onSubmit(values) : onError(errors);
  };

  render() {
    const {children, render, ...props} = this.props;
    const {values, fieldErrors, formErrors} = this.state;

    return (
      <Provider
        value={{values, fieldErrors, setContext: this.setState.bind(this)}}
      >
        <form {...props} onSubmit={this.onSubmit}>
          {render
            ? render({
                values,
                errors: {
                  fields: fieldErrors,
                  form: formErrors,
                },
              })
            : children}
        </form>
      </Provider>
    );
  }
}

class FormItem extends Component {
  static defaultProps = {
    rules: [],
    validate: "change",
  };

  componentDidMount() {
    const {
      contextProps: {values},
      validate,
      name,
    } = this.props;

    if (validate === "always") {
      this.validate(values[name]);
    }
  }

  validate = value => {
    const {
      contextProps: {setContext},
      rules,
      name,
    } = this.props;

    setContext(({fieldErrors}) => ({
      fieldErrors: {
        ...fieldErrors,
        [name]: mapRules(rules, value),
      },
    }));
  };

  update = value => {
    const {
      contextProps: {setContext},
      name,
    } = this.props;

    setContext(({values}) => ({
      values: {
        ...values,
        [name]: value,
      },
    }));
  };

  render() {
    const {
      contextProps: {values, fieldErrors},
      name,
      children,
    } = this.props;

    return React.cloneElement(children, {
      value: values[name],
      error: (fieldErrors[name] || [])[0],
      onChange: e => {
        const value = getValue(e);

        this.validate(value);
        this.update(value);

        e.persist();
      },
    });
  }
}

export default {
  Form,
  FormItem: connect(FormItem),
};
