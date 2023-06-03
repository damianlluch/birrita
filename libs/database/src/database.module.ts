import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI)],
  providers: [DatabaseModule],
  exports: [DatabaseModule],
})
export class DatabaseModule {}
