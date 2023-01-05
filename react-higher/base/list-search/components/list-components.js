class ListComponents extends React.Component {
    render() {
        const {userLists} = this.props
        return (
            <ul>
                {
                    userLists.map(user => <li key={user.id}><h3>{user.name}</h3></li>)
                }
            </ul>
        );
    }

}


//