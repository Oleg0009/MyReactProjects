import React from 'react';
import {Menu, Input} from 'semantic-ui-react'


const Filter = ({setFilter, filteredBy, searchQuery, setSearchQuery}) => {


    return (
        <Menu secondary>
            <Menu.Item active={filteredBy === 'all'} onClick={setFilter.bind(this, 'all')}>
                all
            </Menu.Item>
            <Menu.Item active={filteredBy === 'expensive'} onClick={setFilter.bind(this, 'expensive')}>
                Popular(expensive)
            </Menu.Item>
            <Menu.Item active={filteredBy === 'cheap'} onClick={setFilter.bind(this, 'cheap')}>
                Popular(cheap)
            </Menu.Item>
            <Menu.Item active={filteredBy === 'author'} onClick={setFilter.bind(this, 'author')}>
                Author
            </Menu.Item>
            <Menu.Item>
                <Input icon='search' onChange={e => setSearchQuery(e.target.value)} value={searchQuery}
                       placeholder="Enter..."/>
            </Menu.Item>
        </Menu>
    )
};

export default Filter;


