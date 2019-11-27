import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { CustomersModule } from './routes/customers/customers.module';

@Module({
  imports: [
    // MongooseModule.forRoot(
    //   'mongodb://localhost:27017/pharol-test',
    //   { useNewUrlParser: true, useUnifiedTopology: true }
    // ),
    MongooseModule.forRoot(
      'mongodb://uao1ohfe11dkoqcstymn:GlDcdGwSChAxvhyPxucR@bkpjqjcgutdonpn-mongodb.services.clever-cloud.com:27017/bkpjqjcgutdonpn',
      { useNewUrlParser: true, useUnifiedTopology: true }
    ),
    CustomersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
