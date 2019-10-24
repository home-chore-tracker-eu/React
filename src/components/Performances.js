import React from "react";
import { Row, Col, Table, Icon } from "antd";
import GM from "g2-mobile";
import PanelBox from "./PanelBox";

import createGM from "./gm";
import { chartData, pieData, barData } from "./chart2.js";

GM.Global.pixelRatio = 2;
const Util = GM.Util;

var Shape = GM.Shape;
var G = GM.G;

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
const Pie = createGM(chart => {
  chart.source(pieData, {
    value: { type: "linear", min: 0, max: 15, tickCount: 6 },
    length: { type: "linear", min: 0, max: 10 },
    y: { type: "linear", min: 0, max: 1 }
  });
  chart.coord("polar", {
    inner: 0,
    startAngle: -1.25 * Math.PI,
    endAngle: 0.25 * Math.PI
  });

  chart.axis("value", {
    tickLine: {
      strokeStyle: "#b9e6ef",
      lineWidth: 2,
      value: -5
    },
    label: null,
    grid: null,
    line: null
  });
  chart.axis("y", false);

  chart.guide().arc([0, 1.05], [4.8, 1.05], {
    strokeStyle: "#18b7d6",
    lineWidth: 5,
    lineCap: "round"
  });
  chart.guide().arc([5.2, 1.05], [9.8, 1.05], {
    strokeStyle: "#ccc",
    lineWidth: 5,
    lineCap: "round"
  });
  chart.guide().arc([10.2, 1.05], [15, 1.05], {
    strokeStyle: "#ccc",
    lineWidth: 5,
    lineCap: "round"
  });
  chart.guide().arc([0, 1.2], [15, 1.2], {
    strokeStyle: "#ccc",
    lineWidth: 1
  });
  chart.guide().text([-0.5, 1.3], "0.00%", {
    fillStyle: "#ccc",
    font: "18px Montserrat",
    textAlign: "center"
  });
  chart.guide().text([7.5, 0.7], "7.50%", {
    fillStyle: "#ccc",
    font: "18px Montserrat",
    textAlign: "center"
  });
  chart.guide().text([15.5, 1.3], "15.00%", {
    fillStyle: "#ccc",
    font: "18px Montserrat",
    textAlign: "center"
  });
  chart
    .point()
    .position("value*y")
    .size("length")
    .color("#18b7d6")
    .shape("dashBoard");
  chart.render();
}, 218);

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

const tableData = [];
for (let i = 0; i < 4; i++) {
  tableData.push({
    no: i + 1,
    name: `Kevin`,
    family: "The Johnsons"
  });
}

export default class Home extends React.Component {
  render() {
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
                  <h2> 10 Tasks Assigned Since June</h2>
                </PanelBox>
              </Col>
            </Row>
            <PanelBox title="Percentage Completion Rate">
              <Bar data={barData} />
            </PanelBox>
          </Col>
          <Col xs={24} md={10}>
            <PanelBox title="Best Performers" bodyStyle={{ padding: 0 }}>
              <Line data={chartData} />
            </PanelBox>
            <PanelBox
              title="Overall Completion Rate"
              bodyStyle={{ padding: 0 }}
            >
              <Pie data={pieData} />
            </PanelBox>
          </Col>
        </Row>

        <PanelBox title="Current Kids">
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
          />
        </PanelBox>
      </div>
    );
  }
}
