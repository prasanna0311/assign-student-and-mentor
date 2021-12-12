import React from 'react'

export default function Home() {
  // given a home page
    return (
      <div class=" container-fluid home">
        <div className="row">
          <div className="col-md-3 col-sm-12"></div>
          <div className="col-md-6 col-sm-12">
            <h3 className="headLine">Learning is the Eye of the Mind..!!</h3>
            <img
              className="image"
              src="https://c.neh.tw/thumb/f/720/913b2b578e4448909d5d.jpg"
              alt=""
            />
          </div>
          <div className="col-md-3 col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-12"></div>
          <div className="col-md-6 col-sm-12">
            <h3 className="headLine">
             Dream It , Believe It And Achieve It
            </h3>
            <img
              className="image"
              src="https://thumbs.dreamstime.com/b/linear-flat-business-gain-profit-manager-money-happy-near-tree-vector-illustration-concept-77657761.jpg"
              alt=""
            />
          </div>
          <div className="col-md-3 col-sm-12"></div>
        </div>
        <div className="row footer">
            <div className="col-12">
                <p>copyrights @prasanna</p>
                
            </div>
        </div>
      </div>
    );
  }
