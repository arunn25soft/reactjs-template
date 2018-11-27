import React from 'react';
import Breadcrumb from '../Breadcrumb';
import CardHeader from '../CardHeader';
class List extends React.Component {  
    
    render() {
      return (
        <div className="content-wrapper">
        <div className="container-fluid">
            <Breadcrumb page_title="Basic Table" bc_parent="Parent" bc_child="Child" link="/home"/>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <CardHeader  content_title="C Title" content_summary="C Summary" />
                        <div className="card-block">
                            <div className="row">
                                <div className="col-sm-12 table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                            <th>Nickname</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Ducky</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Ducky</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry</td>
                                            <td>Otto</td>
                                            <td>@twitter</td>
                                            <td>Ducky</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Ducky</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Ducky</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Ducky</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Ducky</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Ducky</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      )
    }
  }
  export default List