import { Router } from 'express';

const UsersRouter = Router();

UsersRouter.post('/', async (request, response) => {
  try {
    response.send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default UsersRouter;
