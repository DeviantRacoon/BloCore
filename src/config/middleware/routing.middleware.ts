// import studentRouting from "../../modules/academic-management/infrastructure/res/routes/student.routes";
// import teacherRouting from "../../modules/academic-management/infrastructure/res/routes/teacher.routes";
// import subjectRouting from "../../modules/academic-management/infrastructure/res/routes/subject.routes";

export const routingModule = (server: any) => {
  // server.app.use("/student", studentRouting);
  // server.app.use("/teacher", teacherRouting);
  // server.app.use("/subject", subjectRouting);

  return (req: any, response: any, next: any) => {
    next();
  };
};
