import React from 'react';
class CardHeader extends React.Component {  
    state = {
        cTitle: this.props.content_title,
        cSummary: this.props.content_summary,
      };
    render() {
        return (
            <div className="card-header">
                <h5 className="card-header-text">{this.state.cTitle}</h5>
                {/* <p>Add <code>.table-hover</code>{this.state.cSummary}</p> */}
                <p>{this.state.cSummary}</p>
            </div>
    )
    }
  }
  export default CardHeader