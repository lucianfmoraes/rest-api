import { Body, Controller, Get, Param, Post,Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { DeleteUserInput } from "./dto/delete-user.input";

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Post()
    saveUser( @Body() createUserInput: CreateUserInput): Promise<CreateUserInput> {
        return this.userService.createUser(createUserInput)
    }

    @Put(':id')
    updateUser(@Param() paramns:any,  @Body()updateUserInput:UpdateUserInput): Promise<User>{
        let id = parseInt(paramns.id);
        return this.userService.updateUser(id, updateUserInput);
    }

    @Put('/delete/:id')
    deleteUser(@Param() paramns:any, @Body()deleteUserInput:DeleteUserInput):Promise<User>{
        let id = parseInt(paramns.id);
        return this.userService.deleteUser(id, deleteUserInput);

    }

}