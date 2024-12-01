import { Module } from '@nestjs/common';
import { AwbsController } from './awbs.controller';
import { AwbsService } from './awbs.service';

@Module({
  controllers: [AwbsController],
  providers: [AwbsService]
})
export class AwbsModule {}
