import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MapSchema } from './map.model';

@Module({
  imports: [
    //Uncomment
    // MongooseModule.forRoot('mongodb://localhost/nest'), 
    // MongooseModule.forFeature([{ name: Map.name, schema: MapSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
