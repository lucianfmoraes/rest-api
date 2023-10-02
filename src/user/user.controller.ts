import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { CreateUserInput } from "./dto/create-user.input";

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

}