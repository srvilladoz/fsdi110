import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./home.css";

class Home extends Component {
    
    render() { 
        return (
            <div className="home-page">
                <h1>Welcome to my super online store</h1>
            </div>
          );
          <Link className="btn btn-info btn-lg" to="/catalog">
            Check our fresh catalog <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
             </Link>
    }
}
 
export default Home;