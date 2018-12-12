import * as React from 'react';

interface Props {
  initialName: string;
}
interface State {
  name: string;
}
export default class Hello extends React.Component<Props, State> {
  state: State = {
    name: this.props.initialName,
  };
  textInput!: HTMLInputElement;

  returnSetName = (name: string) => (): void => {
    this.setState({
      ...this.state,
      name,
    });
  }
  setNameFromInput = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState({ name: this.textInput.value });
    this.textInput.value = '';
  }
  render(): JSX.Element {
    const { name } : State = this.state;
    return (
      <div>
        <div>
          <button type="button" onClick={this.returnSetName('太郎')}>太郎</button>
          <button type="button" onClick={this.returnSetName('花子')}>花子</button>
        </div>
        <form onSubmit={this.setNameFromInput}>
          <input type="text" ref={(node: HTMLInputElement): void => { this.textInput = node; }} />
          <button type="submit">Hello!</button>
        </form>
        <div>Hello {name}!</div>
      </div>
    );
  }
}
