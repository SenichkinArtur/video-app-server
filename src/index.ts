import express from 'express';

const app = express();
const port = 3000;

interface iProps {
  width: number,
  height: number,
  handleChange: (str1: string, str2: string) => string,
  isSmall?: boolean,
}

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

const testObj: iProps = {
  width: 12,
  height: 44,
  handleChange: (str1, str2) => (`${str1} ${str2}`),
  isSmall: true,
};
