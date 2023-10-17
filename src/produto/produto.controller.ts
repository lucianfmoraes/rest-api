import { Body, Controller, Get, Post, Patch } from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { Produto } from "./produto.entity";
import { UpdateProdutoInput } from "./dto/update-produto.input";



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

    @Patch()
    updateProduto( @Body() updateProdutoInput: UpdateProdutoInput) {
        return this.updateProduto(updateProdutoInput)
    }

}