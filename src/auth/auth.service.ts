/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-25 17:56:48
 */
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma.service'
import { registerDto } from './dto/register.dto'
import { hash } from 'argon2'
import { LoginDto } from './dto/login.dto'
import { validateFail } from 'src/helper'

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}
    async register(dto: registerDto) {
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                password: await hash(dto.password),
            },
        })
        return user
    }
    async login(dto: LoginDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [{ name: dto.name }, { email: dto.name }, { mobile: dto.name }],
            },
        })
        if (!user) validateFail('name', '用户不存在')
        return user
    }
    // create(createAuthDto: CreateAuthDto) {
    //   return 'This action adds a new auth';
    // }
    // findAll() {
    //   return `This action returns all auth`;
    // }
    // findOne(id: number) {
    //   return `This action returns a #${id} auth`;
    // }
    // update(id: number, updateAuthDto: UpdateAuthDto) {
    //   return `This action updates a #${id} auth`;
    // }
    // remove(id: number) {
    //   return `This action removes a #${id} auth`;
    // }
}
