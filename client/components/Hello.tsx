import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../state';
import { Act, ActionCreators as Acc } from '../actions';

interface Props {
  greeting: string;
  dispatch: (action: Act) => void;
}
interface State {
  input: string;
}
class Hello extends React.Component<Props, State> {
  state: State = {
    input: '',
  };
  hello = (name: string): void => {
    const { dispatch }: Props = this.props;
    dispatch(Acc.hello(name));
  }
  goodbye = (): void => {
    const { dispatch }: Props = this.props;
    dispatch(Acc.goodbye());
  }
  returnHello = (name: string) => (): void => {
    this.hello(name);
  }
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  }
  helloFromInput = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { input }: State = this.state;
    this.setState({
      input: '',
    });
    this.hello(input);
  }
  render(): JSX.Element {
    const { input }: State = this.state;
    const { greeting }: Props = this.props;
    return (
      <div>
        <div>
          <button type="button" onClick={this.returnHello('太郎')}>太郎</button>
          <button type="button" onClick={this.returnHello('花子')}>花子</button>
        </div>
        <form onSubmit={this.helloFromInput}>
          <input type="text" value={input} onChange={this.handleInputChange} />
          <button type="submit">Hello!</button>
          <div>
            <button type="button" onClick={this.goodbye}>Goodbye!</button>
          </div>
        </form>
        <div>{greeting}</div>
      </div>
    );
  }
}
export default connect(
  (state: GlobalState): GlobalState => ({ greeting: state.greeting }),
)(Hello);
