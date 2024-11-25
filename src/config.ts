/*
 * @Brief:
 * @Description: 配置项
 * @Author: yangjianming
 * @Date: 2024-11-25 15:42:16
 */

import { registerAs } from '@nestjs/config'

export default registerAs('app', () => {
    return {
        name: 'nestjs blog',
        address: 'hangzhou',
    }
})
