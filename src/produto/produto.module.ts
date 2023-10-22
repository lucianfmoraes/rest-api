import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { produtoProvider } from './produto.provider';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ProdutoController],
  providers: [...produtoProvider, ProdutoService],
})
export class ProdutoModule { }
