import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { AdminInterface } from 'src/interfaces/admin.interface';
import { AdminDTO } from 'src/dto/admin.dto';

@Injectable()
export class AdminService {

    constructor(@InjectModel('Admins') private readonly adminModel: Model<AdminInterface>) {}

    async getAdmins(): Promise<AdminInterface[]>{
        const payload = await this.adminModel.find();
       return payload;
    }

    async getAdmin(adminID: string): Promise<any>{
        const payload = await this.adminModel.findById(adminID);
        return payload;
    }

    async getAdminQ(email, password): Promise<any>{
        const payload = await this.adminModel.findOne({},{email: email, password: password});
        return payload;
    }

    async createAdmin(adminDTO: AdminDTO): Promise<AdminInterface>{
        const payload =  new this.adminModel(adminDTO); 
        return await payload.save();
    }

    async updateAdmin(adminID: string, adminDTO: AdminDTO): Promise<AdminInterface>{
        const payload = await this.adminModel.findByIdAndUpdate(adminID, adminDTO, {new: true});
        return payload;
    }

    async deleteAdmin(adminID: string): Promise<AdminInterface>{
        const payload = await this.adminModel.findByIdAndDelete(adminID);
        return payload;
    }

}
