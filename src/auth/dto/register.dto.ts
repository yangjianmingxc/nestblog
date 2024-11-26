/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-25 17:56:48
 */
import { IsNotEmpty, Matches } from 'class-validator'
export class registerDto {
    @IsNotEmpty()
    @Matches(/^[a-z]$/i, { message: '用户名必须为字母' })
    name: string
    @IsNotEmpty({ message: '密码不能为空' })
    password: string
}
