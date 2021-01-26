import fs from 'fs';
import { injectable, inject} from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import AppError from '@shared/errors/AppError';

interface IRequest {
  user_id:string;
  avatarFilename:string;

}

@injectable()
class UpadteUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
    ){}
  public async execute({ user_id, avatarFilename }:IRequest): Promise<User>{
    const user = await this.userRepository.findById(user_id);

    if(!user){
      throw new AppError('Only authenticated users can change avatar.',401);
    }
    if(user.avatar){
      await this.storageProvider.deleteFile(user.avatar);
    }

    const fileName = await this.storageProvider.saveFile(avatarFilename);
    user.avatar = fileName;

    await this.userRepository.save(user);

    return user;

  }

}


export default UpadteUserAvatarService;
