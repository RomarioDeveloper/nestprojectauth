import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    name: string;

    @Column()
    patronymic: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    registrationDate: Date;

    @Column()
    lastAccessTime: Date;

    @Column()
    birthDate: Date;

    @Column()
    aiSpecialistFlag: boolean;
}
