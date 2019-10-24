import React from "react";
import { Card, Statistic, Row, Col, Icon } from "antd";
import { useSelector } from "react-redux";

const Banner = props => {
  const chores = useSelector(state => state.chores.chores);

  const active =
    (chores.filter(chore => chore.childMarkComplete).length / chores.length) *
    100;
  const idle =
    (chores.filter(chore => !chore.childMarkComplete).length / chores.length) *
    100;

  const handleNumber = num => {
    if (num) {
      return active;
    }
    return 0;
  };

  return (
    <div>
      <div className="banner-left">
        <Card
          title="PARENT OVERVIEW"
          headStyle={{
            color: "white",
            borderBottom: "none",
            fontFamily: "Muli",
            fontSize: "17px",
            fontWeight: "bold",
            float: "left"
          }}
          style={{
            width: "66%",
            marginTop: 16,
            marginRight: 10,
            borderRadius: "10px",
            boxShadow: "0 8px 10px rgba(0,0,0,.08)",
            backgroundColor: "rgb(21, 97, 174)",
            color: "rgb(255, 255, 255)",
            backgroundSize: "cover",
            backgroundBlendMode: "soft-light",
            position: "relative",
            backgroundImage:
              "url(https://img.freepik.com/free-vector/illustration-graphs_53876-28520.jpg?size=626&ext=jpg)"
          }}
        >
          <div className="card-bottom"></div>
          <p style={{ color: "white", fontFamily: "Muli" }}>CHORES CREATED</p>
          <Statistic
            value={chores.length}
            precision={0}
            valueStyle={{ color: "#fff" }}
            style={{ color: "#fff", fontSize: "25% !important" }}
          />
          <footer
            style={{ color: "white", fontFamily: "Muli", marginTop: "2%" }}
          >
            <Row gutter={8}>
              <Col span={12}>
                <Card
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "rgb(230,247,255)"
                  }}
                >
                  <Statistic
                    title="ACTIVE OR COMPLETED"
                    value={handleNumber(active)}
                    precision={2}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "rgb(230,247,255)"
                  }}
                >
                  <Statistic
                    title="IDLE"
                    value={handleNumber(idle)}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<Icon type="arrow-down" />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default Banner;
