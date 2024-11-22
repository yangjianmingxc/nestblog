import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
// Controller 装饰器 使用路径前缀可以让我们轻松地对一组相关路由进行分组
@Controller('test1')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('abc')
    getHello(): string {
        return this.appService.getHello()
    }
}
