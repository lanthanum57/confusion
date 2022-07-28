import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderComments({comments}) {
        const comment = comments.map((comment) => {
            if(comment != null)
            {
                return(
                    <div key={comment.id}>
                        <ul className='list-unstyled'>
                            <li>{comment.comment}</li><br />
                            <li>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
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
    
    function RenderDish({dish}) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    const Dishdetail = (props) => {
        if (props.dish != null) {
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <RenderComments comments={props.dish.comments} />
                        </div>
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

export default Dishdetail;