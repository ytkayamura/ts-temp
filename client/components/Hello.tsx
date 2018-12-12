import * as React from 'react';

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
  returnSetName = (name: string) => (): void => {
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
  setNameFromInput = (): void => {
    const { input } : State = this.state;
    this.setState({
      name: input,
      input: '',
    });
  }
  handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') this.setNameFromInput();
  }
  render(): JSX.Element {
    const { name, input } : State = this.state;
    return (
      <div>
        <div>
          <button type="button" onClick={this.returnSetName('太郎')}>太郎</button>
          <button type="button" onClick={this.returnSetName('花子')}>花子</button>
        </div>
        <input type="text" value={input} onChange={this.handleInputChange}
          onKeyPress={this.handleInputKeyPress}/>
        <button onClick={this.setNameFromInput}>Hello!</button>
        <div>Hello {name}!</div>
      </div>
    );
  }
}
