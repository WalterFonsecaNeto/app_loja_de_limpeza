import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from "../components/Navbar";


const PaginaProdutos = () => {

    
const produtos = [
    {
      id: 1,
      nome: "Produto 1",
      preco: 99.99,
      descricao: "Descrição do produto 1",
      imagem: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 2,
      nome: "Produto 2",
      preco: 149.99,
      descricao: "Descrição do produto 2",
      imagem: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 3,
      nome: "Produto 3",
      preco: 199.99,
      descricao: "Descrição do produto 3",
      imagem: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 4,
      nome: "Produto 4",
      preco: 299.99,
      descricao: "Descrição do produto 4",
      imagem: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <div>
        <Navbar />
        <br />
        <br />
      <Container>
       
        <Row xs={1} md={2} lg={4} className="g-4">
          {produtos.map((produto) => (
            <Col key={produto.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={produto.imagem} 
                  alt={produto.nome}
                />
                <Card.Body>
                  <Card.Title>{produto.nome}</Card.Title>
                  <Card.Text>{produto.descricao}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">R$ {produto.preco.toFixed(2)}</span>
                    <button className="btn btn-primary">
                      Comprar
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PaginaProdutos;
