
import { Handler } from "@netlify/functions";
import serverless from "serverless-http";
import { createServer } from "../../server";

const app = createServer();
const handler = serverless(app);

export const handler: Handler = async (event, context) => {
  return await handler(event, context);
};
