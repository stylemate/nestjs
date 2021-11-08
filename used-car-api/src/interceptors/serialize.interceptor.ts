import {
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToClass } from 'class-transformer';

export class SerializeInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>
    ): Observable<any> | Promise<Observable<any>> {
        //runs before request is handled
        console.log('running before the handler:', context);
        return next.handle().pipe(
            map((data: any) => {
                //runs before the response is sent
                console.log('running before response', data);
            })
        );
    }
}
