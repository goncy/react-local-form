# Unstated connect (`react-local-form`)
[![Build Status](https://travis-ci.org/goncy/react-local-form.svg?branch=master)](https://travis-ci.org/goncy/react-local-form)
[![Coverage Status](https://coveralls.io/repos/github/goncy/react-local-form/badge.svg?branch=master)](https://coveralls.io/github/goncy/react-local-form?branch=master)

Simple React local form management

## Installation
```sh
npm install --save react-local-form
```

## Why
Easy form handling for most basic (and common) cases

## How
```jsx
import React from "react";
import {Form, FormItem} from "react-local-form";

const App = () => {
  return (
    <Form
      values={{first: "Gonzalo", last: "Pozzo"}} // Initial values
      onSubmit={console.log} // Modified values on submit
    >
      <FormItem name="first">
        <input type="text" />
      </FormItem>
      <button type="submit">Submit</button>
    </Form>
  );
}

export default App;
```
[![Try it on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/m456qj0m38)

## License
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
