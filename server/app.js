import express from "express";
import router from "./router";

const PORT = process.env.PORT || 9080;
const app = express();

// app.use('^/$', serverRenderer);
// app.use(express.static(path.resolve(__dirname, "../build"), { maxAge: "30d" }));
app.use('/api/users', (req, res, next) => {
  const users = [
    {
      id: 1,
      name: 'lee'
    },
    {
      id: 2,
      name: 'jame'
    }
  ];
  res.send(users).json();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
