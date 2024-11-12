import { Model } from 'mongoose';
import {
  ListStudentsFromClassByIdPort,
  ListStudentsFromClassByIdPortInput,
  ListStudentsFromClassByIdPortResult,
} from '../../../domain/ports/list-students-from-class-by-id.port';
import { StudentDocument } from '../../schemas/student.shema';

export class ListStudentsFromClassByIdMongooseAdapter implements ListStudentsFromClassByIdPort {
  constructor(private readonly StudentModel: Model<StudentDocument>) {}

  async execute({ classId }: ListStudentsFromClassByIdPortInput): Promise<ListStudentsFromClassByIdPortResult> {

    const students = await this.StudentModel.find<StudentDocument>({ classCodeList: { $in: [classId] } })
      .lean()
      .exec();

    // Mapeia os documentos dos estudantes para o formato esperado
    return this.mapStudentsToModel(students);
  }


  private mapStudentsToModel(studentDocumentList: StudentDocument[]): ListStudentsFromClassByIdPortResult[] {
    return studentDocumentList.map(student => ({
      id: student.id,                
      name: student.name,            
      status: student.status,        
      classCodeList: student.classCodeList,  
    }));
  }
}
