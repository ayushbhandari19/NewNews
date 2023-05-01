import React, { Component } from 'react'
import Boxes from './Boxes';
import PropTypes from 'prop-types'


export default class MainComponenet extends Component {
  static defaultProps = {
    default:'crime',
  };
  static propTypes = {
    
    default: PropTypes.string

  };

  constructor(props) {
    super(props);
    this.state = {

      articles: [],
      loading: false,
      totalResults: 0,

    }

  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=${this.props.default}&from=2023-04-01&sortBy=publishedAt&apiKey=e18b10c87d6a4e1989df991b1b43b65e`;
    
    
    fetch(url).then((res) => {
      res.json().then((result) => {
        console.log(result.articles)
        this.setState({ articles: result.articles, loading: false })
      })
    })
    //let data=await fetch(url);
    //let parsedData=await data.json();
    //this.setState({~
    //    
    //    articles:parsedData.events,
    //    loading:true
    //})

  }
  render() {
    return (
      <>
        <h1 className="text-center my-3" > SeatGeeks</h1>
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <Boxes title={element.title} description={element.description} image={element.urlToImage} newsUrl={element.url} author={element.author} />

              </div>

            })}

          </div>
        </div>



      </>
    )
  }
}
