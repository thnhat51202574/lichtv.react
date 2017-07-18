function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Lich',
    lastName: 'Truong'
};

// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

ReactDOM.render(
    element,
    document.getElementById('root')
);