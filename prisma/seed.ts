/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-21 17:12:43
 * 用自己创建的命令 npx prisma db seed
 */

import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs';
import user from './seed/user';

const prisma = new PrismaClient()

async function run() {
    for (let i = 0; i < 10; i++) {
        await prisma.user.create({
            data: {
                name: Random.cname(),
                password: Random.string(6),
                App: {
                    create: {
                        title: Random.csentence(),
                        content: Random.cparagraph(),
                        preview: Random.image('300x300'),
                    }
                }
            },
        })
    }
    await user()
}

run()