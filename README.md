<h1 align="center">BloCoreTs</h1>


<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](/LICENSE)

</div>

---

## Tabla de contenido

- [Descripción](#descripcion)
- [Tecnologías](#tecnologias)
- [Objetivo](#objetivo)
- [Componentes](#componentes)
- [Estado](#estado)
- [Instalación](#instalacion)
- [Comandos](#comandos)
- [Contribución](#contribucion)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Descripción <a name = "descripcion"></a>

BloCoreTs es un backend con una arquitectura Clean y altamente escalable, diseñado para facilitar el desarrollo de aplicaciones web robustas y eficientes. Contiene una gran variedad de herramientas y componentes ya configurados para que puedas comenzar tu proyecto rápidamente.

### Beneficios:

- Arquitectura Clean: Separación de responsabilidades para un código más flexible y mantenible.
- Escalabilidad: Listo para crecer con tu proyecto sin necesidad de grandes modificaciones.
- Componentes preconfigurados: Ahorra tiempo y esfuerzo con herramientas ya listas para usar.
- Entorno de desarrollo optimizado: Disfruta de una experiencia fluida con herramientas como ts-node-dev y TypeORM.

---

## Tecnologías <a name = "tecnologias"></a>

- TypeScript - Lenguaje de programación robusto y escalable.
- Node.js - Entorno de ejecución ligero y eficiente.
- ts-node-dev (nodemon) - Herramienta para ejecutar el proyecto en modo desarrollo con actualizaciones automáticas.
- Express - Framework web popular para crear APIs RESTful.
- TypeORM - ORM para trabajar con bases de datos MySQL de forma intuitiva.
- MySQL - Base de datos relacional robusta y confiable.

---

## Objetivo <a name = "objetivo"></a>

BloCoreTs tiene como objetivo proporcionar una base sólida y escalable para el desarrollo de backends web. Con su arquitectura Clean y sus componentes preconfigurados, te permite comenzar tu proyecto rápidamente y enfocarte en la lógica de negocio.

---

## Componentes <a name = "componentes"></a>

BloCoreTs incluye una gran variedad de componentes preconfigurados para facilitar el desarrollo:

- CORS: Soporte para solicitudes entre dominios.
- JWT: Autenticación y autorización mediante tokens JSON Web.
- ORM: Mapeo objeto-relacional para trabajar con bases de datos MySQL.
- Middleware: Funciones intermedias para procesar solicitudes y respuestas.
- Logs: Registro de eventos del sistema para facilitar la depuración.
- Commands: Tareas automatizadas para ejecutar acciones específicas.

---

## Estado <a name = "estado"></a>

El proyecto está terminado y listo para usarse. Sin embargo, se seguirán realizando actualizaciones y mejoras en el futuro.

---

## Instalación <a name = "instalacion"></a>

Para instalar BloCoreTs, sigue estos pasos:

1. Clona el repositorio de GitHub:

```
git clone https://github.com/tu-nombre-de-usuario/BloCoreTs.git
```

2. Accede al directorio del proyecto:

```
cd BloCoreTs
```

3. Crea el archivo .env en base al archivo .env.EXAMPLE
4. Instala los módulos de npm:

```
npm install
```

## Comandos <a name = “comandos”></a>

BloCoreTs tiene varios comandos para facilitar su uso:
- Inicia el proyecto en modo desarrollo con actualizaciones automáticas:
```
npm run dev
```
- Compila el proyecto de TypeScript a JavaScript
```
npm run tsc
```
- Inicia el API-REST en modo producción:
```
npm run start
```
- Crea un nuevo modelo con sus archivos asociados en el módulo especificado.
```
npm run create models [nombre] [módulo]
# Ejemplo: npm run create models Rol core
```
- Crea un nuevo módulo con la estructura de carpetas Domain, Application e Infrastructure.
```
npm run create module [nombre]
# Ejemplo: npm run create module business
```
## Contribución <a name = “contribucion”></a>
Te invito a contribuir al proyecto reportando errores, creando nuevas funcionalidades o mejorando la documentación. Para más información, consulta la sección Contribuciones en el archivo README.md.

## Licencia <a name = “licencia”></a>
BloCoreTs se distribuye bajo la licencia Apache 2.0. Puedes encontrar más información en el archivo LICENSE.md.

## Contacto <a name = “contacto”></a>
Si tienes alguna pregunta o necesitas ayuda con el proyecto, puedes contactarme a través de mi perfil de Linkedin: [[JHectorZ]]([https://www.linkedin.com/in/jes%C3%BAs-h%C3%A9ctor-zavala-inzunza-670530259/])
