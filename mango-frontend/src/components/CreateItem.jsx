import React, { Component } from 'react'
import ItemService from '../services/ItemService';

class CreateItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
          title: '',
          description: ''
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    // // step 3
    // componentDidMount(){

    //     // step 4
    //     if(this.state.id === '_add'){
    //         return
    //     }else{
    //         ItemService.getEmployeeById(this.state.id).then( (res) =>{
    //             let employee = res.data;
    //             this.setState({firstName: employee.firstName,
    //                 lastName: employee.lastName,
    //                 emailId : employee.emailId
    //             });
    //         });
    //     }        
    // }
    saveItem = (event) => {
        event.preventDefault();
        let item = { title: this.state.title, description: this.state.description };
        console.log('item', JSON.stringify(item));

        ItemService.createItem(item).then(response => {
          this.props.history.push('/items');
        });
    }
    
    changeTitleHandler = (event) => {
        this.setState({title: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    cancel() {
      this.props.history.push('/items');
    }

    render() {
        return (
            <div>
              <div className="container">
                <div className="row">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Add Item</h3>
                    <div className="card-body">
                      <form>
                        <div className = "form-group">
                          <label>Title</label>
                          <input placeholder="Title" name="title" className="form-control" 
                            value={this.state.title} onChange={this.changeTitleHandler}/>
                        </div>
                        <div className = "form-group">
                          <label>Description</label>
                          <input placeholder="Description" name="description" className="form-control" 
                            value={this.state.description} onChange={this.changeDescriptionHandler}/>
                        </div>
                        <button className="btn btn-success" onClick={this.saveItem}>Submit</button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default CreateItem