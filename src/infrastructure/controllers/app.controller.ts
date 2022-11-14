import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/encode")
  encode(): string{
    return this.appService.showEncode();
  }

  @Get("/decode")
  decode(): string{
    return this.appService.showDecode();
  }

  @Get("/show/:name")
  showText(@Param("name") name: string): string{
    return this.appService.showText(name);
  }
}
