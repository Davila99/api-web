import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { Categoria } from './categorias/entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'test',
    entities: [Categoria],
    synchronize: true,
  }),CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
