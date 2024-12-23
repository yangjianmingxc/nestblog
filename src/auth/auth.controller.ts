/*
 * @Brief: 
 * @Description: 
 * @Author: yangjianming
 * @Date: 2024-11-25 17:56:48
 */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { registerDto } from './dto/register.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() dto: registerDto) {
        return dto
    }

    // @Post()
    // create(@Body() createAuthDto: CreateAuthDto) {
    //   return this.authService.create(createAuthDto);
    // }

    // @Get()
    // findAll() {
    //   return this.authService.findAll();
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //   return this.authService.findOne(+id);
    // }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    //   return this.authService.update(+id, updateAuthDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //   return this.authService.remove(+id);
    // }
}
