import { Module } from '@nestjs/common';
import { AmeriabankController } from './ameriabank.controller';
import { AmeriabankService } from './ameriabank.service';

@Module({
  controllers: [AmeriabankController],
  providers: [AmeriabankService],
})
export class AmeriabankModule {}
