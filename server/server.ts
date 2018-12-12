import * as Express from 'express';
import * as path from 'path';

const PORT: number = Number(process.env.PORT) || 8081;

const app = Express();
app.use(Express.static(path.join(__dirname, '../public')));

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
