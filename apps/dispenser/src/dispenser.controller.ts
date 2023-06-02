import { DispenserService } from './dispenser.service';
import { CreateDispenserDTO } from './dto/dispenser.dto';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  ForbiddenException,
  forwardRef,
  Get,
  HttpStatus,
  Inject,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Request,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('/dispenser')
export class DispenserController {
  constructor(private readonly dispenserService: DispenserService) {}

  @Post('/create-dispenser')
  createDispenser(
    @Request() req: Request,
    @Res() res: Response,
    @Body() body: CreateDispenserDTO,
  ) {
    console.log('POST /collections');
    console.log('Body:', JSON.stringify(body));
    return res.status(HttpStatus.OK).json({
      message: 'Dispenser Created',
    });
  }
}
