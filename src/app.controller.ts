import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('subaru')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('model')
  getHello(): string {
    return 'Hello World!';
  }
}
