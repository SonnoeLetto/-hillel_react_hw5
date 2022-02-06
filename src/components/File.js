import { Component } from "react";

export class File extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'initial',
            errors: '',
            data: '',
        }
    }
    
    fetchData = (id) => {
        this.setState({
            status: 'loading',
            errors: null,
            data: null,
        })
        fetch(`https://swapi.dev/api/people/?page=${id}`)
        .then((responce) => {
            console.log(responce);
            return responce.json()
        })
        .then((data) => {
            console.log(data)
            this.setState({
                status: 'success',
                errors: null,
                data,
            })
        }).catch((error) => {
            console.log(error)

            this.setState({
                status: 'error',
                errors: error.message,
                data: null
            })
        })
    }
    componentDidMount() {
        const { peopleID } = this.props;
        this.fetchData(peopleID)
    }
    componentDidUpdate(prevProps, prevState) {

        const prevPeopleID = prevProps.peopleID;
        const peopleID = this.props.peopleID;
        if (prevPeopleID !== peopleID) this.fetchData(peopleID);
        
    }
    render() {
        const {status, errors, data } = this.state;
        return (
            <>
                {status === 'loading' || status === 'initial' ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        {errors === null ? (
                            <ul>
                                {
                                    data.results.map(item => (
                                        <li key={item.name}>{item.name}</li>
                                    ))
                                }
                            </ul>
                            
                        ) : (
                            <span>
                                {errors}
                            </span>
                        )}
                    </div>
                )}
            </>
        )
    }
}

