import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AlunosService } from './alunos.service'; 
import { Aluno } from './aluno.entity'; 

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Get()
  async getAlunos(): Promise<Aluno[]> {
    return this.alunosService.findAll(); 
  }

  @Post()
  async createAluno(@Body() alunoData: Aluno): Promise<Aluno> {
    return this.alunosService.create(alunoData); 
  }

  @Get(':id')
  async getAluno(@Param('id') id: string): Promise<Aluno> {
    return this.alunosService.findOne(id); 
  }
}
