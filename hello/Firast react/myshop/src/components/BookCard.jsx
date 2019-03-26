import React from 'react'
import {Card, Icon, Image, Button} from 'semantic-ui-react'

const CardExampleCard = (book) => {
    const {author, title, image, price, addToCard,addedCount} = book;

    return (
        <Card>
            <Image src={image}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='rub'/>
                    {price}
                </a>
            </Card.Content>
            <Button onClick={addToCard.bind(this, book)}>
                Add to Cart{addedCount>0&&`(${addedCount})`}
            </Button>
        </Card>
    )
};

export default CardExampleCard
