import path from "path";

import swaggerJSDoc, { OAS3Definition, Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "CleanCity API",
    version: "1.0.0",
    description: "API documentation for CleanCity backend"
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Local server"
    }
  ]
};

const options: Options = {
  definition: swaggerDefinition,
  apis: [path.join(__dirname, "../routes/*.ts")]
};

export const swaggerSpec = swaggerJSDoc(options);
