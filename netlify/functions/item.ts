import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const id = Math.floor(Math.random() * 20) + 1;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const item = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ item }),
  };
};

export { handler };
