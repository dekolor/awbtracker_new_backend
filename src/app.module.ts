import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwbsModule } from './awbs/awbs.module';

@Module({
  imports: [AwbsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
