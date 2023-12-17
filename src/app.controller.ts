import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Map } from './map.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('maps')
  async getMaps(): Promise<{ id: string }[]> {
    return await this.appService.getMapIds();
  }

  @Get('maps/:id')
  async getMapDetails(@Param('id') id): Promise<Map> {
    return await this.appService.getMapById(id)
  }
}
