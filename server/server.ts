/*
import * as Express from 'express';

const PORT: number = Number(process.env.PORT) || 8081;

const app = Express();

app.get('/', (req: Express.Request, res: Express.Response) => {
  return res.send('Hello Express!');
});

app.listen(PORT, (err: Error): void => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  } else {
    // tslint:disable-next-line:no-console
    console.log(`Express app listening on port ${PORT}`);
  }
});
export default app;
 */
import exercise01 from './exercise/exercise01';
import { hoge, fuga as fugaga } from './exercise/exercise02';
import * as exercise03 from './exercise/exercise03';

exercise01();
console.log(hoge, fugaga);
console.log(exercise03.piyo, exercise03.piyoyo);
