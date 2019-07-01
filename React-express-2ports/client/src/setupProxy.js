import proxy from "http-proxy-middleware";

export default app => {
  app.use(
    "/LIVE_exec_py3.py",
    proxy({
      target: "http://localhost:3009/LIVE_exec_py3.py",
      changeOrigin: true
    })
  );
};