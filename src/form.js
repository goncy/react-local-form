import React, {Component} from "react";

const {Provider, Consumer} = React.createContext({});

const getValue = data => {
  return data.target ? data.target.value : data;
};

class Form extends Component {
  state = this.props.values;

  onSubmit = e => {
    const {onSubmit} = this.props;

    e.preventDefault();

    onSubmit(this.state);
  };

  render() {
    const {children, ...props} = this.props;

    return (
      <Provider
        value={{values: this.state, setFields: this.setState.bind(this)}}
      >
        <form {...props} onSubmit={this.onSubmit}>
          {children}
        </form>
      </Provider>
    );
  }
}

const FormItem = ({name, children}) => {
  return (
    <Consumer>
      {({values, setFields}) =>
        React.cloneElement(children, {
          value: values[name],
          onChange: e => setFields({[name]: getValue(e)}),
        })
      }
    </Consumer>
  );
};

export {Form, FormItem};
