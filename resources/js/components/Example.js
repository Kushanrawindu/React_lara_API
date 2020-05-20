import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Example extends Component {

    constructor(props){
        super(props);
        this.state={
            id:0,
            title:'',
            body:'',
            posts:[]
        }
    }

    render(){
    return (
        <div className="container">
            <div className="row">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>Body</td>
                            <td>
                                <button className="waves-effect waves-light btn">Edit</button>
                            </td>
                            <td>
                                <button className="waves-effect waves-light btn">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
