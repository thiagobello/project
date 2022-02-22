
import { 
  IsDefined, 
  IsNumberString, 
  IsUUID, 
} from "class-validator";

export class UserCreateDto {
    @IsDefined()
    @IsNumberString()
    phone: string;

    @IsUUID()
    entityParentUuid: string;
}