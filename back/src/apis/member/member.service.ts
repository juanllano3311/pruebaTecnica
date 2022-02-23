import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { MemberInterface } from 'src/interfaces/member.interface';
import { MemberDTO } from 'src/dto/member.dto';

@Injectable()
export class MemberService {

    constructor(@InjectModel('Members') private readonly memberModel:Model<MemberInterface>){}

    async getMembers(): Promise<MemberInterface[]>{
        const payload = await this.memberModel.find();
       return payload;
    }

    async getMember(memberID: string): Promise<MemberInterface>{
        const payload = await this.memberModel.findById(memberID);
        return payload;
    }

    async getMemberQ(email): Promise<any>{
        const payload = await this.memberModel.findOne({},{email: email});
        return payload;
    }

    async createMember(memberDTO: MemberDTO): Promise<MemberDTO>{
        const payload =  new this.memberModel(memberDTO); 
        return await payload.save();
    }

    async updateMember(memberID: string, memberDTO: MemberDTO): Promise<MemberInterface>{
        const payload = await this.memberModel.findByIdAndUpdate(memberID, memberDTO, {new: true});
        return payload;
    }
    
    async deleteMember(memberID: string): Promise<MemberInterface>{
        const payload = await this.memberModel.findByIdAndDelete(memberID);
        return payload;
    }
}
