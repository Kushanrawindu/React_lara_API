import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

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
    componentDidMount(){
        this.getAll();
    }
    getAll(){
        Axios.get(`http://127.0.0.1/api`)
        .then((res)=>{
            this.setState({
                posts:res.data
            })
        })
    }
    getOne(e,post){
        this.setState({
            id:test.id,
            title:test.title,
            body:test.body
        })
    }
    delete(e,id){
        Axios.delete(`http://127.0.0.1/api/${id}`)
        .then((res)=>{
            this.getAll();
        })
    }
    submit(event,id){
        event.preventDefault();
        if(this.id ==0){
            Axios.post(`http://127.0.0.1/api`,{title:this.state.title, body:this.state.body})
            .then((res)=>{
                this.getAll();
            })
        }else{
            Axios.put(`http://127.0.0.1/api/${id}`,{title:this.state.title, body:this.state.body})
            .then((res)=>{
                this.getAll();
            })
        }
    }

    render(){
    return (
        <div className="container">
            <div className="row">
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>Body</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                        {this.state.posts.map(post=>
                            <tr>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <button onClick={(e)=>this.getOne(e,post)} className="waves-effect waves-light btn">Edit</button>
                                </td>
                                <td>
                                    <button onClick={(e)=>this.delete(e,post)} className="waves-effect waves-light btn">Delete</button>
                                </td>
                            </tr>
                        )}
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
