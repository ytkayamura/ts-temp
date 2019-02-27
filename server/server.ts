import * as Express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as ReqIF from '../common/request-if';
import * as ResIF from '../common/response-if';

const PORT: number = Number(process.env.PORT) || 8081;

const app = Express();
app.use(Express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/hello-world', (req: Express.Request, res: Express.Response) => {
  const { greeting }: ReqIF.HelloWorld = req.body;
  const newGreeting: string = greeting.startsWith('Hello World') ? greeting : 'Hello World';
  const resp: ResIF.HelloWorld = { greeting: `${newGreeting}!` };
  return res.status(200).send(resp);
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
