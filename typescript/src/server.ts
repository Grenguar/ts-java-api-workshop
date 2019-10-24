import App from "./app";
const PORT: number = 8080;

new App().appInstance.listen(PORT, async () => {
  console.log(`View modules app listening on port ${PORT}`);
});
