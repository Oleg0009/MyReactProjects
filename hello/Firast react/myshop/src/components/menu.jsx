import React from 'react'
import {Menu, List, Image, Button, Popup} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const CardComponent = ({image, id, title, removeFromCard }) => (
    <List selection verticalAlign='middle'>
        <List.Item>
            <Image avatar src={image}/>
            <List.Content>
                <List.Header>{title} &nbsp;</List.Header>
            </List.Content>
            <Button color='red' onClick={removeFromCard.bind(this, id)}>
                Remove
            </Button>
        </List.Item>
    </List>
);


const MenuComponent = (props) => {


    const {totalPrice, count, items} = props;
    console.log(props);

    return (
        <Menu>
            <Menu.Item
                name='editorials'
            >
                Магазин Книг
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item name='reviews'>
                    Итого:&nbsp;
                    <b>{totalPrice}</b> грн.
                </Menu.Item>
                <Popup
                    trigger={
                        <Menu.Item
                            name='help'
                        >
                            Корзина({count})
                        </Menu.Item>}
                    hideOnScroll
                    content={items.map(item => <CardComponent {...item}/>)}
                    on='click'

                />
            </Menu.Menu>
        </Menu>
    )

};
export default MenuComponent;