import React, { Component } from "react";
import Item from "./item";
import ItemService from "../services/itemService";


import "./catalog.css";

class Catalog extends Component {
    state = {
        catalog: [],
        categories: []
    };

    render() {

        let itemsToDisplay = this.state.catalog;
        if (this.state.filter) {
            itemsToDisplay = itemsToDisplay.filter((item) => item.category === this.state.filter);

        }
        return (
            <div className="catalog">
                <h3>Our Amazing Catalog</h3>
                <h5>We have { this.state.catalog.length } products for you</h5>

                <div classNmae = "filter-buttons">
                    { this.state.categories.map((cat) => (
                    <button
                        onClick={() =>{
                            this.filterByCat(cat);
                        }}
                        key={cat}
                        className="btn btn-info"
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                { this.state.catalog.map( obj => <Item key={obj._id} data={obj}></Item>)}
            </div>
        );
    }

    //best place to load data from server
    //executed after the initial render

    clearFilter = () => {
        this.setState({ filter: "" });
    };

    filterByCat = (cat) => {
        this.setState({ filter: cat });
    };

    async componentDidMount () {

        let service = new ItemService();
        let data = await service.getCatalog();
        
        let categories = [];
        for(let i=0; i<data.length; i++) {
            let category = data[i].category;

            if(!categories.includes(category)) {
                categories.push(category);
            }
        }
        this.setState({ catalog: data, categories: categories });
    }
}

export default Catalog;