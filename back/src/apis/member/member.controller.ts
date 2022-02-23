import { Body, Controller, Post, HttpStatus, Res, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { MemberDTO } from 'src/dto/member.dto';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {

    constructor(private memberService: MemberService) {}

    @Post('/create')
    async cratePost(@Res() res, @Body() memberDTO: MemberDTO){
       const payload = await this.memberService.createMember(memberDTO);
        return res.status(HttpStatus.OK).json({
            message: 'agregado correctamente',
            payload
        });
    }

    @Get('/')
    async getAdmins(@Res() res){
        const payload = await this.memberService.getMembers();
        return res.status(HttpStatus.OK).json(
            payload);
    }

    @Get('/:memberID')
    async getAdmin(@Res() res, @Param('memberID') memberID){
        const payload = await this.memberService.getMember(memberID);
        if(!payload) throw new NotFoundException('No se encuentra');
        return res.status(HttpStatus.OK).json([payload]);
    }

    @Get('/search/:email')
    async getAdminQ(@Res() res, @Param('email') email){      
        const payload = await this.memberService.getMemberQ(email);
        if(!payload) throw new NotFoundException('No se encuentra');
        return res.status(HttpStatus.OK).json([payload]);
    }

    @Delete('/delete')
    async deleteAdmin(@Res() res, @Query('memberID') memberID){
        const payload = await this.memberService.deleteMember(memberID);
        if(!payload) throw new NotFoundException('No se encontró');
        return res.status(HttpStatus.OK).json([payload]);
    }

    @Put('/update')
    async updateAdmin(@Res() res, @Body() memberDTO: MemberDTO, @Query('memberID') memberID){
        const payload = await this.memberService.updateMember(memberID, memberDTO);
        if(!payload) throw new NotFoundException('gravigti');
        return res.status(HttpStatus.OK).json([payload]);
    }

}
