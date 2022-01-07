import React, { Component } from 'react'

export default class BLeftBar extends Component {
        constructor(props){
            super(props);
            this.state = {
                items:[],
                isLoaded: false,
            }
        }
        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
        }
    render() {
        var { isLoaded, items } = this.state;
        
        if (!isLoaded){
            return <div>Loading..</div>
        }
        else{
            return (
                
                    <ul>
                        <h1 className='headingH1 ps-3'>Contacts</h1>
                            
                        {items.map(item =>(
                            <li key={item.id} className='contact-card d-flex align-items-center'>
                                <img src='../assets/images/contact-avatar.png' className='contact-avatar'/>
                                <div className=''>
                                <p className='contact-name'>{item.name}</p>
                                <span className='contact-details'>{item.email}<br/>
                                {item.phone}</span>
                                </div>
                            </li>
                        ))}
                        
                        
                    </ul>
                
            )
        }
        
    }
}
