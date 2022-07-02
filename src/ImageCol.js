import React from "react"
import { Button } from "react-bootstrap";
function ImageCol(props) {
    return (<div className='col'>
        <div className="card">
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">FashionHouse</p>
            </div>
        </div>
        <Button className="cartbtn">Add to Bag</Button>
    </div>);
}

export default ImageCol;