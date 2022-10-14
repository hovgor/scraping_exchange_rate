import { Module } from '@nestjs/common';
import { IdbankController } from './idbank.controller';
import { IdbankService } from './idbank.service';

@Module({
  controllers: [IdbankController],
  providers: [IdbankService],
})
export class IdbankModule {}
