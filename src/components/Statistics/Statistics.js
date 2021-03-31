import React from "react";
import statsData from "./statistical-data.json";
const Statistics = () => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li>
      </ul>
    </section>
  );
};
export default Statistics;