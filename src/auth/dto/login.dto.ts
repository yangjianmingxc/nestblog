/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-25 17:56:48
 */
import { PartialType } from '@nestjs/mapped-types'
import { registerDto } from './register.dto'
import { IsNotEmpty, Length, Matches } from 'class-validator'
import { IsExists } from 'src/validate/is-exists/is-exists'

export class LoginDto extends PartialType(registerDto) {
    @IsNotEmpty({ message: '用户名不能为空' })
    @Length(3, 16, { message: '用户名长度为3-16位' })
    @IsExists('user', ['name', 'email', 'mobile'], { message: '用户名不存在' })
    name: string
    @IsNotEmpty({ message: '密码不能为空' })
    password: string
}
