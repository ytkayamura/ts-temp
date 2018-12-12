// 型なし定義
const allow1 = () => 'allow1';
function allow1_orgFunc() {
  return 'allow1';
}

// 戻り値の型あり定義
const allow2 = (): string => 'allow2';
function allow2_orgFunc(): string {
  return 'allow2';
}

// 引数あり定義
const allow3 = (str: string): string => str;
function allow3_orgFunc(str: string): string {
  return str;
}

// 複数行定義
const allow4 = (): number[] => {
  const nums: number[] = [1, 2, 3, 4];
  return nums.map((n: number): number => n * 2);
};

// 高階関数
const generateCallback1 = (s: string) => () => console.log(s);
const generateCallback2 = (s: string):() => void => ():void => console.log(s);

export default function () {
  console.log(allow1(), allow1_orgFunc());
  console.log(allow2(), allow2_orgFunc());
  console.log(allow3('allow3'), allow3_orgFunc('allow3 org'));
  console.log(allow4());
  generateCallback1('hoge')();
  generateCallback2('fuga')();
}
