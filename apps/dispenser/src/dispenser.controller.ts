import { DispenserService } from './dispenser.service';
import { CreateDispenserDTO } from './dto/dispenser.dto';
import { Body, Controller, HttpStatus, Post, Request, Res, } from '@nestjs/common';
import { Response } from 'express';

@Controller('/dispenser')
export class DispenserController {
  constructor(private readonly dispenserService: DispenserService) {}

  @Post('/')
  createDispenser(
    @Request() req: Request,
    @Res() res: Response,
    @Body() body: CreateDispenserDTO,
  ) {
    console.log('POST /collections');
    console.log('Body:', JSON.stringify(body));
    return res.status(HttpStatus.OK).json({
      message: 'Hello world!',
    });
  }
}
