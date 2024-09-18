import { Module, } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { SuppliersModule } from './suppliers/suppliers.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'sqlite',
        database: '../identifier.sqlite',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        // logging: true,
        keepConnectionAlive: true,
      }),
    }),
    SuppliersModule,
  ],
  // controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }