import { Router } from 'express';
import multer from 'multer';

import CreateuserService from '../service/CreateUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

const UsersRouter = Router();
const upload = multer(uploadConfig);

UsersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createuser = new CreateuserService();

    const user = await createuser.execute({
      name,
      email,
      password,
    });

    delete user.password;
    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

UsersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    return response.json({ ok: true });
  },
);

export default UsersRouter;
