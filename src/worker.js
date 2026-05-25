import { Hono } from 'hono';

const app = new Hono();

app.get('/api/hello', (c) => {
  const now = new Date().toISOString();
  return c.html(`<div class="hello">Hello from the worker at ${now}</div>`);
});

export default app;
