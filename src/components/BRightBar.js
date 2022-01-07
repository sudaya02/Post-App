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
            fetch('https://picsum.photos/v2/list?page=1&limit=10')
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
                        <h1 className='headingH1 padding-0 ps-3'>Lorem Picsum Posts</h1>
                            
                        {items.map(item =>(
                            <li key={item.id} className='image-card d-flex align-items-center'>
                                <img src={item.download_url} className='post-image' width="100%"/>
                               
                                <p className='author-name a2-bg'>Post by: {item.author}</p>
                                
                            </li>
                        ))}
                        
                        
                    </ul>
                
            )
        }
        
    }
}
