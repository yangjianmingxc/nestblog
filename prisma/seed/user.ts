/*
 * @Brief: 
 * @Description: user 表
 * @Author: yangjianming
 * @Date: 2024-11-22 15:54:05
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async () => {
    const user = await prisma.user.findFirst({
        orderBy: {
            id: 'asc',
        },
        take: 1,
    })
    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            name: 'admin',
            password: '123456',
        },
    })
}
