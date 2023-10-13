import { UserService } from "./user.service";
import { User } from "./user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { DeleteUserInput } from "./dto/delete-user.input";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<User[]>;
    saveUser(createUserInput: CreateUserInput): Promise<CreateUserInput>;
    updateUser(paramns: any, updateUserInput: UpdateUserInput): Promise<User>;
    deleteUser(paramns: any, deleteUserInput: DeleteUserInput): Promise<User>;
}
