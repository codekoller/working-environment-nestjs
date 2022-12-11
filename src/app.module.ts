import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: '.env.development',
      validationSchema: Joi.object({
        APP_URL: Joi.string().required(),
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development')
          .required(),
        PORT: Joi.number().default(3000).required(),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
