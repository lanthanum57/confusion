import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    renderComments(dish) {
        const comment = dish.comments.map((comment) => {
            if(comment != null)
            {
                return(
                    <div key={comment.id}>
                        <ul className='list-unstyled'>
                            <li>{comment.comment}</li><br />
                            <li>-- {comment.author} , {comment.date}</li>
                        </ul>
                    </div>
                )
            }
            else{
                return(
                    <div></div>
                )
            }
        });

        return(
            <div>
                <h4>Comment</h4>
                {comment}
            </div>
        )
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return(
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(dish)}
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default Dishdetail;