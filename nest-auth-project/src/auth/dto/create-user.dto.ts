import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    patronymic: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    birthDate: Date;

    @ApiProperty()
    aiSpecialistFlag: boolean;
}
