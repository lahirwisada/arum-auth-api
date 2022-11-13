import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Guys!';
  }
  showText(text: string): string{
    return "ini dia "+text;
  }
}
