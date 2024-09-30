import { Module } from '@nestjs/common';
import { SysAssistenteEstudosController } from './sys-assistente-estudos.controller';
import { SysAssistenteEstudosService } from './sys-assistente-estudos.service';

@Module({
  imports: [],
  controllers: [SysAssistenteEstudosController],
  providers: [SysAssistenteEstudosService],
})
export class SysAssistenteEstudosModule {}
