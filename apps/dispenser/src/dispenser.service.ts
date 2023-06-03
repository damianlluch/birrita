import { Injectable } from '@nestjs/common';
import { ClientSession, Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dispenser } from './schemas/dispenser.schema';
import { CreateDispenserInterface } from './interfaces/dispenser.interface';

@Injectable()
export class DispenserService {
  constructor(
    @InjectModel('Dispensers')
    private campaignModel: Model<Dispenser>,
  ) {}
  async create(dispenser: CreateDispenserInterface) {}
}
