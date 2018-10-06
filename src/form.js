import React, {Component} from "react";

const {Provider, Consumer} = React.createContext({});

const getValue = data => {
  return data.target ? data.target.value : data;
};

const connect = Component => ownerProps => (
  <Consumer>
    {contextProps => <Component contextProps={contextProps} {...ownerProps} />}
  </Consumer>
);

class Form extends Component {
  state = {
    values: this.props.values || {},
    errors: this.props.errors || {},
  };

  onSubmit = e => {
    const {onSubmit} = this.props;
    const {errors, values} = this.state;

    e.preventDefault();

    Object.values(errors).flat().length === 0 && onSubmit(values);
  };

  render() {
    const {children, ...props} = this.props;
    const {values, errors} = this.state;

    return (
      <Provider value={{values, errors, setContext: this.setState.bind(this)}}>
        <form {...props} onSubmit={this.onSubmit}>
          {children}
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

    setContext(({errors}) => ({
      errors: {
        ...errors,
        [name]: rules.map(rule => rule(value)).filter(Boolean),
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
      contextProps: {values, errors},
      name,
      children,
    } = this.props;

    return React.cloneElement(children, {
      value: values[name],
      error: (errors[name] || [])[0],
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
