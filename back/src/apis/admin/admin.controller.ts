import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { AdminDTO } from '../../dto/admin.dto'
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService) {}


    @Post('/create')
    async cratePost(@Res() res, @Body() adminDTO: AdminDTO){
       const payload = await this.adminService.createAdmin(adminDTO);
        return res.status(HttpStatus.OK).json({
            message: 'agregado correctamente',
            payload
        });
    }

    @Get('/')
    async getAdmins(@Res() res){
        const payload = await this.adminService.getAdmins();
        return res.status(HttpStatus.OK).json(
            payload);
    }

    @Get('/:adminID')
    async getAdmin(@Res() res, @Param('adminID') adminID){
        const payload = await this.adminService.getAdmin(adminID);
        if(!payload) throw new NotFoundException('No found');
        return res.status(HttpStatus.OK).json([payload]);
    }

    @Get('/search/:email/:password')
    async getAdminQ(@Res() res, @Param('email') email, @Param('password') password){      
        const payload = await this.adminService.getAdminQ(email, password);
        if(!payload) throw new NotFoundException('No se encuentra');
        return res.status(HttpStatus.OK).json([payload]);
    }

    @Delete('/delete')
    async deleteAdmin(@Res() res, @Query('adminID') adminID){
        const payload = await this.adminService.deleteAdmin(adminID);
        if(!payload) throw new NotFoundException('No found');
        return res.status(HttpStatus.OK).json(
            [payload]);
    }

    @Put('/update')
    async updateAdmin(@Res() res, @Body() adminDTO: AdminDTO, @Query('adminID') adminID){
        const payload = await this.adminService.updateAdmin(adminID, adminDTO);
        if(!payload) throw new NotFoundException('gravigti');
        return res.status(HttpStatus.OK).json(
            [payload]);
    }

}
