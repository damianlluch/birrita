import { Module } from '@nestjs/common';
import { DispenserModule } from "../../dispenser/src/dispenser.module";

@Module({
  imports: [
    DispenserModule
  ],
})
export class MainModule {}
