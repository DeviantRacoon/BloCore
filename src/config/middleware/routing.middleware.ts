import userRouter from "../../modules/core/infrastructure/res/routes/user.routes";

export const routingModule = (server: any) => {
  server.app.use("/user", userRouter);
  // server.app.use("/teacher", teacherRouting);
  // server.app.use("/subject", subjectRouting);

  return (req: any, response: any, next: any) => {
    next();
  };
};
