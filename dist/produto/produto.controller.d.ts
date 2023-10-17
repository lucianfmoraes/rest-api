import { ProdutoService } from "./produto.service";
import { Produto } from "./produto.entity";
import { UpdateProdutoInput } from "./dto/update-produto.input";
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    getAllProduto(): Promise<Produto[]>;
    saveProduto(produto: Produto): Promise<Produto>;
    updateProduto(updateProdutoInput: UpdateProdutoInput): any;
}
