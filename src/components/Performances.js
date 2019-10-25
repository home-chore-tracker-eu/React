import React from "react";
import { Row, Col, Table, Icon } from "antd";
import GM from "g2-mobile";
import PanelBox from "./PanelBox";
import { useSelector } from "react-redux";
import createGM from "./gm";
import { pieData } from "./chart2.js";

GM.Global.pixelRatio = 2;
const Util = GM.Util;

var Shape = GM.Shape;
var G = GM.G;

const Home = () => {
  const children = useSelector(state => state.children.children);
  const families = useSelector(state => state.families.families);
  const chores = useSelector(state => state.chores.chores);

  const chartData = [];
  if (children && families) {
    for (let i = 0; i < children.length; i++) {
      chartData.push({
        name: `${children[i].name}`,
        tem: `${children[i].chores.filter(chore => chore.parentMarkComplete)
          .length * 10}`,
        family: `${
          families.find(family => children[i].family_id === family.id).surname
        }`
      });
    }
  }

  const barData = [];
  if (children && families) {
    for (let i = 0; i < children.length; i++) {
      barData.push({
        name: `${children[i].name}`,
        tem: children[i].chores.filter(chore => chore.parentMarkComplete)
          .length * 100,
        family: `${
          families.find(family => children[i].family_id === family.id).surname
        }`
      });
    }
  }


  const tableData = [];
  if (children && families) {
    for (let i = 0; i < children.length; i++) {
      tableData.push({
        no: i + 1,
        name: `${children[i].name}`,
        family: `The ${
          families.find(family => children[i].family_id === family.id).surname
        }s`
      });
    }
  }

  Shape.registShape("point", "dashBoard", {
    getShapePoints: function(cfg) {
      var x = cfg.x;
      var y = cfg.y;
      return [{ x: x, y: y }, { x: x, y: 0.5 }];
    },
    drawShape: function(cfg, canvas) {
      var point1 = cfg.points[0];
      var point2 = cfg.points[1];
      point1 = this.parsePoint(point1);
      point2 = this.parsePoint(point2);
      G.drawLines([point1, point2], canvas, {
        stroke: "#18b7d6",
        lineWidth: 2
      });
      var text = cfg.origin._origin.value.toString();
      G.drawText(text + "%", cfg.center, canvas, {
        fillStyle: "#f75b5b",
        font: "30px Monstreat",
        textAlign: "center",
        textBaseline: "bottom"
      });
      G.drawText(cfg.origin._origin.pointer, cfg.center, canvas, {
        fillStyle: "#ccc",
        textAlign: "center",
        textBaseline: "top"
      });
    }
  });

  const Line = createGM(chart => {
    var defs = {
      name: {
        tickCount: 7,
        range: [0, 1]
      },
      tem: {
        tickCount: 5,
        min: 0
      }
    };

    var label = {
      fill: "#979797",
      font: "14px san-serif",
      offset: 6
    };
    chart.axis("name", {
      label: function(text, index, total) {
        var cfg = Util.mix({}, label);

        if (index === 0) {
          cfg.textAlign = "start";
        }
        if (index > 0 && index === total - 1) {
          cfg.textAlign = "end";
        }
        return cfg;
      }
    });

    chart.axis("tem", {
      label: {
        fontSize: 14
      }
    });
    chart.source(chartData, defs);
    chart
      .line()
      .position("name*tem")
      .color("family")
      .shape("smooth");
    chart.render();
  }, 200);

  const Bar = createGM(chart => {
    chart.source(barData, {
      tem: {
        tickCount: 5
      }
    });
    chart.axis("name", {
      label: {
        fontSize: 14
      },
      grid: null
    });
    chart.axis("tem", {
      label: {
        fontSize: 14
      }
    });
    chart
      .intervalStack()
      .position("name*tem")
      .color("family");
    chart.render();
  }, 320);

  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      width: 150
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 150
    },
    {
      title: "Family",
      dataIndex: "family"
    }
  ];

  // export const chartData = [
  //   {"name": 'Kevin',"tem": 10,"family": "Francis"},
  //   {"name": 'John',"tem": 22,"family": "Francis"},
  //   {"name": 'Terry',"tem": 20,"family": "Francis"},
  //   {"name": 'Mirabel',"tem": 26,"family": "Francis"},
  //   {"name": 'Kevin',"tem": 20,"family": "Francis"},
  //   {"name": 'John',"tem": 26,"family": "Francis"},

  // ];

  return (
    <div>
      <Row gutter={16} type="flex" justify="space-between">
        <Col xs={24} md={14}>
          <Row gutter={16} type="flex" justify="space-between">
            <Col xs={24} md={8}></Col>
            <Col xs={24} md={8}></Col>
            <Col l={24} md={24}>
              <PanelBox className="card-item">
                <Icon type="team" />
                <h2>
                  {" "}
                  {chores.length === 1
                    ? "1 Task Currently Assigned"
                    : `${chores.length} Tasks Currently Assigned`}
                </h2>
              </PanelBox>
            </Col>
          </Row>
          <PanelBox title="Percentage Completion Rate Per Child">
           {barData.length ? <Bar data={barData}/> : null}
          </PanelBox>
        </Col>
        <Col xs={24} md={10}>
          <PanelBox title="Best Performers (Points)" bodyStyle={{ padding: 0 }}>
            <Line data={chartData} />
          </PanelBox>
          
        </Col>
      </Row>

      <PanelBox title="Current List of Kids">
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      </PanelBox>
    </div>
  );
};

export default Home;
