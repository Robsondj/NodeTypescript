import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column() // default is varchar
    provider: string;

    @Column('time with time zone') // just for PostgreSQL
    date: Date;
}

export default Appointment;
