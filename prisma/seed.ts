/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-21 17:12:43
 * 用自己创建的命令 npx prisma db seed
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function run() {
    for (let i = 0; i < 10; i++) {
        await prisma.user.create({
            data: {
                name: 'Alice',
                password: '1111',
            },
        })
    }
}

run()