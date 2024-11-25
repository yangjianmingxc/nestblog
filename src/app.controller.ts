/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-19 18:03:50
 */
import { Controller, Get, Inject } from '@nestjs/common'
import { ConfigService } from './common/config.service'
// Controller 装饰器 使用路径前缀可以让我们轻松地对一组相关路由进行分组
@Controller()
export class AppController {
    constructor(private config: ConfigService) {}

    @Get()
    getHello(): any {
        return this.config.data.address
    }
}
