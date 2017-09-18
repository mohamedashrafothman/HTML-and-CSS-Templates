const fs = require('fs');

const icon = (name)=> {
    return (fs.readFileSync(`./public/images/icons/${name}.svg`));
};

const menu = [
    {title: 'Stores', icon: 'store'},
    {title: 'Tags', icon: 'tag'},
    {title: 'Top', icon: 'top'},
    {title: 'Add', icon: 'add'},
    {title: 'Map', icon: 'map'}
];