import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    AfterInsert,
    AfterRemove,
    AfterUpdate
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    //Can't really use hooks without using entities
    @AfterInsert() //whenever anything's inserted, this hook will trigger
    logInsert() {
        console.log(`Inserted User with id: ${this.id}`);
    }

    @AfterUpdate()
    logUpdate() {
        console.log(`Updated User with id: ${this.id}`);
    }

    @AfterRemove()
    logRemove() {
        console.log(`Removed User with id: ${this.id}`);
    }
}
