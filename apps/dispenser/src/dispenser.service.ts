import { Injectable } from '@nestjs/common';

@Injectable()
export class DispenserService {
  getHello(): string {
    return 'Hello World!';
  }
}
