import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import * as config from '../config.json';

const mongoURI = `${config.database.mongo}://${config.database.username}:${config.database.password}@${config.database.host}/${config.database.db}`;
console.log(mongoURI);

@Module({
  imports: [MongooseModule.forRoot(mongoURI), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
