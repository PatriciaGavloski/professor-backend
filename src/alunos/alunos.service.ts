import { Injectable } from '@nestjs/common';
import { Aluno } from './aluno.entity'; 

@Injectable()
export class AlunosService {
  private alunos: Aluno[] = []; 

  findAll(): Aluno[] {
    return this.alunos; 
  }

  create(alunoData: Aluno): Aluno {
    const newAluno = new Aluno(); 
    newAluno.id = Math.random().toString(); 
    newAluno.name = alunoData.name;
    newAluno.classCode = alunoData.classCode;
    newAluno.email = alunoData.email;
    newAluno.age = alunoData.age;
    
    this.alunos.push(newAluno); 
    return newAluno;
  }

  findOne(id: string): Aluno {
    return this.alunos.find(aluno => aluno.id === id);
  }
}
