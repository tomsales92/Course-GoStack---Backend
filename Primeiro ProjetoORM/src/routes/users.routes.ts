import { Router } from 'express';
import CreateuserService from '../service/CreateUserService';

const UsersRouter = Router();

UsersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createuser = new CreateuserService();

    const user = await createuser.execute({
      name,
      email,
      password,
    });
    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default UsersRouter;
