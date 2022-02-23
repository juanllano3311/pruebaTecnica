import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './apis/admin/admin.module';
import { MemberModule } from './apis/member/member.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [AdminModule, MemberModule, MongooseModule.forRoot('mongodb://localhost/Cidenet')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
