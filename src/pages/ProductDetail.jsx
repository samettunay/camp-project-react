import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductDetail() {
    let { name } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        let productService = new ProductService()
        productService.getProductByName(name).then(result => setProduct(result.data.data))
    }, [name])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>
                            <span className='category'>{product.category?.categoryName}</span>
                        </Card.Meta>
                        <Card.Description>
                            <p><strong>Birim Fiyatı:</strong> {product.unitPrice} TL</p>
                            <p><strong>Stok Adedi:</strong> {product.unitsInStock}</p>
                            <p><strong>Birim Başına Miktar:</strong> {product.quantityPerUnit}</p>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Sepete Ekle
                            </Button>
                            <Button basic color='blue'>
                                Favorilere Ekle
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
