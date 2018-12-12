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
  setNameTaro = (): void => {
    this.setState({ name: '太郎' });
  }
  setNameHanako = (): void => {
    this.setState({ name: '花子' });
  }
  render(): JSX.Element {
    const { name } : State = this.state;
    return (
      <div>
        <button type="button" onClick={this.setNameTaro}>太郎</button>
        <button type="button" onClick={this.setNameHanako}>花子</button>
        <div>Hello {name}!</div>
      </div>
    );
  }
}
