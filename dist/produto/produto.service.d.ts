import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
import { CreateProdutoInput } from './dto/create-produto.input';
import { UpdateProdutoInput } from './dto/update-produto.input';
export declare class ProdutoService {
    private produtoRepository;
    constructor(produtoRepository: Repository<Produto>);
    findAll(): Promise<Produto[]>;
    createProduto(createProdutoInput: CreateProdutoInput): Promise<Produto>;
    updateProduto(id: number, updateProdutoInput: UpdateProdutoInput): Promise<Produto>;
    deleteProduto(id: number): Promise<Produto[]>;
}
