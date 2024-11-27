/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-25 17:56:48
 */
import { IsNotEmpty, Length, Matches } from 'class-validator'
import { IsNotExists } from 'src/validate/is-not-exists/is-not-exists'
export class registerDto {
    @IsNotEmpty({ message: '用户名不能为空' })
    @Length(3, 16, { message: '用户名长度为3-16位' })
    @Matches(/^[a-z]+$/i, { message: '用户名必须为字母' })
    @IsNotExists('user', ['name', 'email'], { message: '用户名已存在' })
    name: string
    @IsNotEmpty({ message: '密码不能为空' })
    password: string
}
