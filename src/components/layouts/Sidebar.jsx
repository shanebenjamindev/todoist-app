import {
  BarsOutlined,
  CalculatorOutlined,
  CalculatorTwoTone,
  CalendarOutlined,
  DownOutlined,
  FileFilled,
  InboxOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="d-md-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="https://th.bing.com/th/id/R.9ab7dbfdab6791b9679ac0e201b2cd2b?rik=pGJunoLwjFqlvA&pid=ImgRaw&r=0"
            width={30}
            height={30}
            alt="user"
          />
          User
        </div>
        <div>
          <DownOutlined />
          <BarsOutlined />
        </div>
      </div>

      <div>
        <button className="btn btn-outline-primary">
          <PlusOutlined />
          Add Task
        </button>
        <ul>
          <li className="d-flex justify-content-between">
            <div>
              <SearchOutlined />
              Search
            </div>
            <div>count</div>
          </li>
          <li className="d-flex justify-content-between">
            <div>
              <InboxOutlined />
              Inbox
            </div>
            <div>count</div>
          </li>
          <li className="d-flex justify-content-between">
            <div>
              <CalendarOutlined />
              Today
            </div>
            <div>count</div>
          </li>
          <li className="d-flex justify-content-between">
            <div>
              <CalculatorOutlined />
              Upcoming
            </div>
            <div>count</div>
          </li>
          <li className="d-flex justify-content-between">
            <div>
              <CalculatorOutlined />
              Filter
            </div>
            <div>count</div>
          </li>
        </ul>
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <div>My Projects</div>
          <DownOutlined />
        </div>

        <div className="d-flex justify-content-between">
          <div>Project: Home</div>
          <p>count</p>
        </div>
      </div>

      <div>
        <button className="btn">
          <PlusOutlined /> Add a team
        </button>
      </div>
    </div>
  );
}
