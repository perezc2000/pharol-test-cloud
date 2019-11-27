import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

import { Types } from 'mongoose';

@Injectable()
export class ValidateObjectId implements PipeTransform {
    async transform(value: string, metadata: ArgumentMetadata) {
        const isValid = Types.ObjectId.isValid(value);
        if (!isValid) throw new BadRequestException('¡ID invalido!');
        return value;
    }
}