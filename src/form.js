import React, {Component} from "react";

const {Provider, Consumer} = React.createContext({});

const connect = Component => ownerProps => (
  <Consumer>
    {contextProps => <Component contextProps={contextProps} {...ownerProps} />}
  </Consumer>
);

class Form extends Component {
  static defaultProps = {
    values: {},
    rules: [],
  };

  state = {
    values: {},
    errors: {},
  };

  componentDidMount() {
    const {values} = this.props;

    this.handleSetValues(values);
  }

  handleSubmit = e => {
    const {onSubmit} = this.props;
    const {errors, values} = this.state;

    e.preventDefault();

    onSubmit({values, errors});
  };

  handleSetValues = (newValues = {}) => {
    const {rules} = this.props;

    this.setState(({values, errors}) => {
      const mergedValues = {...values, ...newValues};
      const mergedErrors = Object.entries(rules).reduce(
        (errors, [property, rules]) => ({
          ...errors,
          [property]: rules
            .map(rule => rule(mergedValues[property], mergedValues))
            .filter(Boolean),
        }),
        errors
      );

      return {
        values: mergedValues,
        errors: mergedErrors,
      };
    });
  };

  render() {
    const {children, render, ...props} = this.props;
    const {values, errors} = this.state;

    return (
      <Provider value={{values, errors, setValues: this.handleSetValues}}>
        <form {...props} onSubmit={this.handleSubmit}>
          {render
            ? render({
                values,
                errors,
                submit: this.handleSubmit,
                setValues: this.handleSetValues,
              })
            : children}
        </form>
      </Provider>
    );
  }
}

const FormItem = ({
  contextProps: {values, errors, setValues},
  name,
  children,
}) =>
  React.cloneElement(children, {
    value: values[name],
    error: (errors[name] || [])[0],
    errors: errors[name] || [],
    onChange: e => {
      setValues({[name]: e.target ? e.target.value : e});

      e.persist();
    },
    ...children.props,
  });

export default {
  Form,
  FormItem: connect(FormItem),
};
