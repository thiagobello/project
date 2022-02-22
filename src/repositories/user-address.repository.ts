import { Repository, EntityRepository } from "typeorm";
import { UserAddress } from "../entities/user-address";

@EntityRepository(UserAddress)
export class UserAddressRepository extends Repository<UserAddress>{

}