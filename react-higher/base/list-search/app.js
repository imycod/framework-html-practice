class App extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [],
            filterUsers: [],
            default: 'asd'
        }
    }

    componentDidMount(prevProps, prevState) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(result =>
                this.setState({
                    users: result,
                    filterUsers: result
                })
            )
    }

    onChangeHandler = events => {
        if (!events.target.value) return this.setState({filterUsers:this.state.users})
        const comparedUsers = this.state.filterUsers.filter(user => user.name.includes(events.target.value))
        this.setState(
            () => {
              return {
                  filterUsers:comparedUsers
              }
            },
            () => {
                console.log(this.state)
            }
        )
    }

    render() {
        return (
            <div>
                <InputComponents onChangeHandler={this.onChangeHandler}/>
                <ListComponents userLists={this.state.filterUsers}/>
            </div>
        );
    }


}