import { UserCreateDto } from "./dtos/create.dto";
import { UserRepository } from "../../repositories/user.repository";
import { UserCreateResponse } from "./responses/create.response";

export class UserService{
  
  constructor(
    public readonly userRepository: UserRepository
  ){}

  async create(
    body: UserCreateDto
  ): Promise<UserCreateResponse> {
   try {
     return await this.userRepository.save(body)
   } catch (error) {
     
   }
  }
}