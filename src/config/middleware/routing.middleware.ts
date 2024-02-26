// Core
import userRouter from "../../modules/core/infrastructure/res/routes/user.routes";
import roleRouter from "../../modules/core/infrastructure/res/routes/role.routes";

// Menu
import menuRouter from "../../modules/menu/infrastructure/res/routes/menu.routes";
import displayRouter from "../../modules/menu/infrastructure/res/routes/display.routes";

export const routingModule = (server: any) => {
  server.app.use("/user", userRouter);
  server.app.use("/role", roleRouter);
  server.app.use("/menu", menuRouter);
  server.app.use("/display", displayRouter);

  return (req: any, response: any, next: any) => {
    next();
  };
};
