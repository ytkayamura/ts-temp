import * as React from 'react';
import { connect } from 'react-redux';
import { default as axios }  from 'axios';
import { GlobalState } from '../state';
import { Act, ActionCreators as Acc } from '../actions';
import * as ReqIF from '../../common/request-if';
import * as ResIF from '../../common/response-if';

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
  helloWorld = async (): Promise<void> => {
    const { greeting, dispatch } = this.props;
    try {
      const req: ReqIF.HelloWorld = { greeting };
      const res = await axios.post<ResIF.HelloWorld>(
        '/api/hello-world',
        req,
      );
      dispatch(Acc.helloWorld(res.data.greeting));
    } catch (err) {
      console.log(err);
    }
  }
  goodbye = (): void => {
    const { dispatch }: Props = this.props;
    dispatch(Acc.goodbye());
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
        <form onSubmit={this.helloFromInput}>
          <input type="text" value={input} onChange={this.handleInputChange} />
          <button type="submit">Hello!</button>
          <div>
            <button type="button" onClick={this.helloWorld}>Hello World!</button>
          </div>
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
