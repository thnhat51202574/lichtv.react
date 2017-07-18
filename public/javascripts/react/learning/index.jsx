class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {posts : this.props.posts};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({}),
            1000
        );
    }

    render() {
        const posts = this.state.posts;
        return (
            <div>
                <ul>
                    {posts.map((post) =>
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )}
                </ul>
                <hr />
                {posts.map((post) =>
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                )}
            </div>
        );
    }
}

var posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

var iCount = 3;
setInterval(function(){
    posts.push({id: iCount, title: 'Blog ' + iCount, content: 'Count ' + iCount});
    iCount++;
},1000);

ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
);