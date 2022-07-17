import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Lygorithm!';
  }
  sayId(): string {
    return "odoldotol";
  } 
}
