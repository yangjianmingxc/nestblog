/*
 * @Brief: 
 * @Description: prisma client
 * @Author: yangjianming
 * @Date: 2024-11-26 16:22:51
 */
import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            log: ['query'],
        })
    }
}
