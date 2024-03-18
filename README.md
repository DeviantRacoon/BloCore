
<h1 align="center">BloCoreTs</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](/LICENSE)

</div>

---

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Objective](#objective)
- [Components](#components)
- [Status](#status)
- [Installation](#installation)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Description <a name = "description"></a>

BloCoreTs is a backend framework with a Clean architecture and high scalability, designed to facilitate the development of robust and efficient web applications. It contains a wide variety of tools and pre-configured components allowing you to start your project quickly.

### Benefits:

- Clean Architecture: Separation of concerns for more flexible and maintainable code.
- Scalability: Ready to grow with your project without the need for major modifications.
- Pre-configured Components: Save time and effort with ready-to-use tools.
- Optimized Development Environment: Enjoy a smooth experience with tools like ts-node-dev and TypeORM.

---

## Technologies <a name = "technologies"></a>

- TypeScript - Robust and scalable programming language.
- Node.js - Lightweight and efficient execution environment.
- ts-node-dev (nodemon) - Tool for running the project in development mode with automatic updates.
- Express - Popular web framework for creating RESTful APIs.
- TypeORM - ORM for working with MySQL databases in an intuitive way.
- MySQL - Robust and reliable relational database.

---

## Objective <a name = "objective"></a>

BloCoreTs aims to provide a solid and scalable foundation for web backend development. With its Clean architecture and pre-configured components, it allows you to start your project quickly and focus on the business logic.

---

## Components <a name = "components"></a>

BloCoreTs includes a wide variety of pre-configured components to facilitate development:

- CORS: Support for cross-domain requests.
- JWT: Authentication and authorization using JSON Web Tokens.
- ORM: Object-relational mapping for working with MySQL databases.
- Middleware: Intermediate functions to process requests and responses.
- Logs: System event logging to facilitate debugging.
- Commands: Automated tasks for executing specific actions.

---

## Status <a name = "status"></a>

The project is completed and ready for use. However, updates and improvements will continue to be made in the future.

---

## Installation <a name = "installation"></a>

To install BloCoreTs, follow these steps:

1. Clone the GitHub repository:

```
git clone https://github.com/JHectorZ/BloCoreTs.git
```

2. Access the project directory:

```
cd BloCoreTs
```

3. Create the .env file based on the .env.EXAMPLE file.
4. Install npm modules:

```
npm install
```

## Commands <a name = "commands"></a>

BloCoreTs has several commands to facilitate its use:
- Start the project in development mode with automatic updates:
```
npm run dev
```
- Compile the TypeScript project to JavaScript:
```
npm run tsc
```
- Start the API-REST in production mode:
```
npm run start
```
- Create a new model with its associated files in the specified module.
```
npm run create models [name] [module]
# Example: npm run create models Role core
```
- Create a new module with the structure of Domain, Application, and Infrastructure folders.
```
npm run create module [name]
# Example: npm run create module business
```
## Contributing <a name = "contributing"></a>
I invite you to contribute to the project by reporting bugs, creating new features, or improving documentation. For more information, consult the Contributions section in the README.md file.

## License <a name = "license"></a>
BloCoreTs is distributed under the Apache 2.0 license. You can find more information in the LICENSE.md file.

## Contact <a name = "contact"></a>
If you have any questions or need help with the project, you can contact me through my Linkedin profile: [[JHectorZ]](https://www.linkedin.com/in/jesús-héctor-zavala-inzunza-670530259/)
