import * as React from 'react';

export enum Fruit {
  APPLE = 'Apple',
  ORANGE = 'Orange',
  BANANA = 'Banana',
}
interface Props {
  fruit: Fruit;
  setName: (name: string) => void;
}
export default class FruitButton extends React.Component<Props> {
  onClick = (): void => {
    const { fruit, setName }: Props = this.props;
    setName(fruit);
  }
  render(): JSX.Element {
    const { fruit }: Props = this.props;
    return (
      <button type="button" onClick={this.onClick}>{fruit}</button>
    );
  }
}
