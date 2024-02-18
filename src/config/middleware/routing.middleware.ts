import userRouter from "../../modules/core/infrastructure/res/routes/user.routes";
import roleRouter from "../../modules/core/infrastructure/res/routes/role.routes";

export const routingModule = (server: any) => {
  server.app.use("/user", userRouter);
  server.app.use("/role", roleRouter);

  return (req: any, response: any, next: any) => {
    next();
  };
};
