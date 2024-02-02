const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("../data/questions.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

const corsOptions = {
  origin: "https://react-quiz-three-beta.vercel.app/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);
server.use(cors(corsOptions));

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
