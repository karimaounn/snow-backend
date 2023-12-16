import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('maps')
  getMaps(): { id: string }[] {
    return [{ id: '1' }, { id: '2' }];
  }
}
