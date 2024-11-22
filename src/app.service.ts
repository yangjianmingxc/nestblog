/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-19 18:03:50
 */
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!'
    }
}
