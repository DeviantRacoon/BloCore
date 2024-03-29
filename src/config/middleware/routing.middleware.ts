import path from "path";

// Core
import userRouter from "../../app/core/infrastructure/res/routes/user.routes";
import roleRouter from "../../app/core/infrastructure/res/routes/role.routes";

// Menu
import menuRouter from "../../app/menu/infrastructure/res/routes/menu.routes";
import displayRouter from "../../app/menu/infrastructure/res/routes/display.routes";

export const routingModule = (server: any) => {
  server.app.get("/", (req: any, res: any) => {
    res.sendFile("views/index.html", { root: "public" });
  });

  server.app.use("/user", userRouter);
  server.app.use("/role", roleRouter);
  server.app.use("/menu", menuRouter);
  server.app.use("/display", displayRouter);

  return (req: any, response: any, next: any) => {
    next();
  };
}; 
