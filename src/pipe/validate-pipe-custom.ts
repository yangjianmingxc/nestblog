/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-11-26 15:36:17
 */
import { ValidationError, ValidationPipe } from '@nestjs/common'

export class ValidatePipeCustom extends ValidationPipe {
    protected flattenValidationErrors(validationErrors: ValidationError[]): any[] {
        return validationErrors.map((err) => ({
            field: err.property,
            message: Object.values(err.constraints)[0],
        }))
    }
}
