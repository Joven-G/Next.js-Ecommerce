import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class ProdutosCarrinho extends React.Component {
    state = {
        nome: "Produto",
        quantidade: 3,
        preco: 10
    }

    removerCarrinho(){
        alert("AAAA");
        console.log("Remover do Carrinho");
    }

    render (){
        return (
          <Table bordered striped responsive>
            <thead>
              <tr>
                <th>
                  Produto
                </th>
                <th>
                  Quantidade
                </th>
                <th>
                  Preço
                </th>
                <th>
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 1 produto por linha*/}
              <tr>
                <th>
                  {this.state.nome}
                </th>
                <td>
                  {this.state.quantidade}
                </td>
                <td>
                  {this.state.preco}
                </td>
                <td>
                  <Button bsSize="xsmall" onClick={this.removerCarrinho}>
                    Remover do Carrinho
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        )
    }
};
