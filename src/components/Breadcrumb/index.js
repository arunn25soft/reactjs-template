import React from 'react';
class Breadcrumb extends React.Component {  
    state = {
        pageTitle: this.props.page_title,
        bcParent: this.props.bc_parent,
        bcChild: this.props.bc_child,
        cTitle: this.props.content_title,
        cSummary: this.props.content_summary,
        link: this.props.link,
    };
    render() {
      return (
        <div className="row">
                <div className="col-sm-12 p-0">
                    <div className="main-header">
                        <h4>{this.state.pageTitle}</h4>
                        <ol className="breadcrumb breadcrumb-title breadcrumb-arrow">
                            <li className="breadcrumb-item">
                                <a href={this.state.link}>
                                    <i className="icofont icofont-home"></i>
                                </a>
                            </li>
                            <li className="breadcrumb-item"><a href={this.state.link}>{this.state.bcParent}</a>
                            </li>
                            <li className="breadcrumb-item"><a href="#">{this.state.bcChild}</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
      )
    }
  }
  export default Breadcrumb