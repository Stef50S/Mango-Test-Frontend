import React, { Component } from 'react'
import ItemService from '../services/ItemService'
import AuthenticationService from '../services/AuthenticationService';

class ItemList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                items: []
        }
        this.addItem = this.addItem.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        ItemService.getItems().then((response) => {
            this.setState({ items: response.data });
        });
    }

    addItem() {
      this.props.history.push('/add-item');
    }

    logout() {
      AuthenticationService.logout()
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Item List</h2>
                 <div className="row">
                    <button className="btn btn-primary" onClick={this.addItem}>Add</button>
                    <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                 </div>
                 <br></br>
                 <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.items.map(
                                        item => 
                                        <tr key={item.id}>
                                             <td>{item.title}</td>   
                                             <td>{item.description}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ItemList