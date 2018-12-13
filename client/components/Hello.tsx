import * as React from 'react';
import FruitButton, { Fruit } from './FruitButton';

interface Props {
  initialName: string;
}
interface State {
  name: string;
  input: string;
}
export default class Hello extends React.Component<Props, State> {
  state: State = {
    name: this.props.initialName,
    input: '',
  };
  setName = (name: string): void => {
    this.setState({
      ...this.state,
      name,
    });
  }
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  }
  setNameFromInput = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { input } : State = this.state;
    this.setState({
      name: input,
      input: '',
    });
  }
  render(): JSX.Element {
    const { name, input } : State = this.state;
    return (
      <div>
        <div>
          <FruitButton fruit={Fruit.APPLE} setName={this.setName} />
          <FruitButton fruit={Fruit.ORANGE} setName={this.setName} />
          <FruitButton fruit={Fruit.BANANA} setName={this.setName} />
        </div>
        <form onSubmit={this.setNameFromInput}>
          <input type="text" value={input} onChange={this.handleInputChange} />
          <button type="submit">Hello!</button>
        </form>
        <div>Hello {name}!</div>
      </div>
    );
  }
}
