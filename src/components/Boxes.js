import React, { Component } from 'react'

export default class Boxes extends Component {

    render() {
        let { title,description,image,newsUrl,author} = this.props
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={image?image:"https://the-gadgeteer.com/wp-content/uploads/2023/04/nerdytech-couchmaster-02.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"> {description}</p>
                        <p className="card-text"><strong>  By {author}</strong></p>
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-dark">Navigate</a>
                    </div>
                </div>

            </div>
        )
    }
}
