/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-27 17:27:20
 */
import { BadRequestException } from '@nestjs/common'

export const validateFail = (field: string, message: string) => {
    throw new BadRequestException({
        error: 'Bad Reuqest',
        message: [
            {
                field,
                message,
            },
        ],
        statusCode: 400,
    })
}
