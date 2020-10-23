import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({ type: 'varchar', length: 60, unique: true})
    username: string = '';

    @Column({ type: 'varchar', length: 500})
    password: string = '';

    @Column({ type: 'varchar', length: 45, unique: true})
    email: string = '';

    @Column({ type: 'text', nullable: true })
    profile_img: string = '';
   
    @BeforeInsert()
    async hashPassword() {
        var saltRounds = 5;
        this.password = await hash(this.password, saltRounds);
    }
    
}