import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    createUser(createUserInput: CreateUserInput): Promise<User>;
    updateUser(id: number, updateUserInput: UpdateUserInput): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
