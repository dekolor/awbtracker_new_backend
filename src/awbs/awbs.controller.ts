import { Controller, Get } from '@nestjs/common';
import { AwbsService } from './awbs.service';
import { Awb } from './interfaces/awb.interface';

@Controller('awbs')
export class AwbsController {
  constructor(private awbsService: AwbsService) {}

  @Get('/list')
  async findAll(): Promise<Awb[]> {
    return this.awbsService.findAll();
  }
}
