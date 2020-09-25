import React from "react";

import {
  Card, CardBody,
  Row, Col, 
  Table
} from "reactstrap";

import CustomCard from "../components/Content/CustomCard";

let cards = [
  {
    order: 1,
    heading: "Pending Cases",
    count: 56,
    color: "#0095ff",
    icon: "fa fa-plus-square fa-4x"
  },
  {
    order: 2,
    heading: "Finished Cases",
    count: 235,
    color: "#008000",
    icon: "fa fa-medkit fa-4x"
  },
  { 
    order: 3,
    heading: "Urgent Cases",
    count: 3,
    color: "#FF0000",
    icon: "fa fa-heartbeat fa-4x"
  }
]

class Dashboard extends React.Component {
  render() {
    return (
      <div className="content">
        <h3>Overview</h3>
        <Row>
          {cards.map(card => {
            return (
              <Col lg="3" md="6" sm="6" key={card.order}>
                <CustomCard heading={card.heading} count={card.count} icon={card.icon} color={card.color}/>
              </Col>
            );
          })}
        </Row>

        <h3>Player Injuries</h3>
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Player ID</th> 
                      <th>Players Name</th>
                      <th>Gender</th> 
                      <th>Injury</th> 
                      <th>Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10</td> 
                      <td>Bala Aryal</td>
                      <td>Male</td> 
                      <td>ACL</td> 
                      <td>Goalkeeper</td>
                    </tr>
                    <tr>
                      <td>7</td> 
                      <td>Sailesh Sharma</td>
                      <td>Male</td> 
                      <td>Groin Injury</td> 
                      <td>Midfielder</td>
                    </tr>
                    <tr>
                      <td>6</td> 
                      <td>Sagar Tiwari</td>
                      <td>Male</td> 
                      <td>Hamstring</td> 
                      <td>Striker</td>
                    </tr>
                    <tr>
                      <td>14</td> 
                      <td>Prawesh Gaire</td>
                      <td>Male</td> 
                      <td>Hamstring</td> 
                      <td>Striker</td>
                    </tr>
                    <tr>
                      <td>13</td> 
                      <td>Sagar Aryal</td>
                      <td>Male</td> 
                      <td>Knee</td> 
                      <td>Defender</td>
                    </tr>
                    <tr>
                      <td>4</td> 
                      <td>Shusil Shapkota</td>
                      <td>Male</td> 
                      <td>Groin</td> 
                      <td>Striker</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
