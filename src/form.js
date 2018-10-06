import React, {Component} from "react";

const {Provider, Consumer} = React.createContext({});

const getValue = data => {
  return data.target ? data.target.value : data;
};

class Form extends Component {
  state = {
    values: this.props.values || {},
    errors: this.props.errors || {}
  };

  onSubmit = e => {
    const {onSubmit} = this.props;
    const {errors, values} = this.state;

    e.preventDefault();

    Object.values(errors).flat().length === 0 && onSubmit(values);
  };

  render() {
    const {children, ...props} = this.props;
    const {values, errors} = this.state

    return (
      <Provider
        value={{values, errors, setContext: this.setState.bind(this)}}
      >
        <form {...props} onSubmit={this.onSubmit}>
          {children}
        </form>
      </Provider>
    );
  }
}

const FormItem = ({name, children, rules = []}) => {
  return (
    <Consumer>
      {({values, setContext, errors}) =>
        React.cloneElement(children, {
          value: values[name],
          error: (errors[name] || [])[0],
          onChange: e => {
            const value = getValue(e);

            setContext(({values, errors}) => ({
              values: {
                ...values,
                [name]: value
              },
              errors: {
                ...errors,
                [name]: rules.map(rule => rule(value)).filter(Boolean)
              }
            }))

            e.persist();
          },
        })
      }
    </Consumer>
  );
};

export {Form, FormItem};
