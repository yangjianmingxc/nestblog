/*
 * @Brief: 
 * @Description: 
 * @Author: yangjianming
 * @Date: 2024-11-25 17:56:48
 */
import { PartialType } from '@nestjs/mapped-types';
import { registerDto } from './register.dto';

export class UpdateAuthDto extends PartialType(registerDto) {}
