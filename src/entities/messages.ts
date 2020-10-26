import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messages')
export class Message {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({ type: 'int', nullable: false })
    to_id: number = 0;

    @Column({ type: 'int', nullable: false })
    from_id: number = 0;

    @Column({ type: 'text', nullable: false })
    message_body: string = '';

}