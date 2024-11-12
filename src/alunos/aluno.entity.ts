import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('alunos') 
export class Aluno {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column() 
  nome: string;

  @Column() 
  status: string;

  @Column('simple-array') 
  classCodeList: string[];
}
