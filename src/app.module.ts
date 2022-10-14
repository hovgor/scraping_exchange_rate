import { Module } from '@nestjs/common';
import { AmeriabankModule } from './modules/ameriabank/ameriabank.module';
import { IdbankModule } from './modules/idbank/idbank.module';

@Module({
  imports: [AmeriabankModule, IdbankModule],
})
export class AppModule {}
