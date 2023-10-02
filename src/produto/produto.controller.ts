import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { Produto } from "./produto.entity";



@Controller("/produto")
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}

    @Get()
    getAllProduto(): Promise<Produto[]> {
        return this.produtoService.findAll()
    }

    @Post()
    saveProduto( @Body() produto: Produto): Promise<Produto> {
        return this.produtoService.createProduto(produto)
    }

}