import React from "react";
import { Card, Statistic, Row, Col, Icon, Timeline } from "antd";
import { useSelector } from "react-redux";

const Banner = props => {
  const chores = useSelector(state => state.chores.chores);

  const active =
    (chores.filter(chore => chore.childMarkComplete === 1).length /
      chores.length) *
    100;
  const idle =
    (chores.filter(chore => chore.childMarkComplete === 0).length /
      chores.length) *
    100;

  const handleActive = num => {
    if (num) {
      return active;
    }
    return 0;
  };

  const handleIdle = num => {
    if (num) {
      return idle;
    }
    return 0;
  };

  return (
    <Row gutter={24}>
      <Col span={18}>
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
            width: "100%",
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
                    value={handleActive(active)}
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
                    value={handleIdle(idle)}
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
      </Col>

      <Col span={6}>
        <Card
          title="Recent Activity"
          style={{
            boxShadow: "0 8px 10px rgba(0,0,0,.08)",
            borderRadius: "10px",
            marginTop: "5%",
            overflowY: "auto"
          }}
        >
          <Timeline mode="right">
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
          ,
        </Card>
      </Col>
    </Row>
  );
};

export default Banner;
