import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberSchema } from 'src/schemas/member.schema';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
  imports:[MongooseModule.forFeature([
    {name: 'Members', schema: MemberSchema}
  ])],
  controllers: [MemberController],
  providers: [MemberService]
})
export class MemberModule {}
