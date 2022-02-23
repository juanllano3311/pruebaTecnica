import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from 'src/schemas/admin.schema';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports:[MongooseModule.forFeature([
    {name: 'Admins', schema: AdminSchema}
  ])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
