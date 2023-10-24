import { Body, Controller, Get, Post, Patch, Param, Delete } from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { Produto } from "./produto.entity";
import { UpdateProdutoInput } from "./dto/update-produto.input";
import { User } from "src/user/user.entity";

@Controller("/produto")
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) { }

    @Get()
    getAllProduto(): Promise<Produto[]> {
        return this.produtoService.findAll()
    }

    @Post()
    saveProduto(@Body() produto: Produto): Promise<Produto> {
        return this.produtoService.createProduto(produto)
    }

    @Patch(':id')
    updateProduto(@Param() paramns: any, @Body() updateProdutoInput: UpdateProdutoInput): Promise<Produto> {
        let id = parseInt(paramns.id);
        return this.produtoService.updateProduto(id,updateProdutoInput);
    }

    @Delete('/:id')
    deleteProduto(@Param('id') id: number): Promise<Produto[]> {
        return this.produtoService.deleteProduto(id);
    }


}