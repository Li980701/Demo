<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 40 }"
    :scroll="{ y: 400 }"
  />
</template>
<script>
//import request() function from axios js
import { request } from "../../network/axios";
request({
  url:
    "https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=demo",
})
  .then((res) => {
    // Push IBM annualEarnings data into table
    console.log(res);
    for (let i = 0; i < res.data.quarterlyEarnings.length; i++) {
      data.push({
        key: i,
        comName: res.data.symbol,
        quarStart: res.data.quarterlyEarnings[i].fiscalDateEnding,
        quarEnd: res.data.quarterlyEarnings[i].reportedDate,
        reEps: res.data.quarterlyEarnings[i].reportedEPS,
        estEps: res.data.quarterlyEarnings[i].estimatedEPS,
        suprise: res.data.quarterlyEarnings[i].surprise,
      });
    }
  })
  .catch(console.log(console.log("Error Cannot Read Results From API")));

const columns = [
  {
    title: "Company Name",
    dataIndex: "comName",
    width: 100,
  },
  {
    title: "Quarter Starting",
    dataIndex: "quarStart",
    width: 100,
  },
  {
    title: "Quarter Ending",
    dataIndex: "quarEnd",
    width: 100,
  },
  {
    title: "Reported EPS",
    dataIndex: "reEps",
    width: 100,
  },
  {
    title: "Estimated EPS",
    dataIndex: "estEps",
    width: 100,
  },
  {
    title: "surprise",
    dataIndex: "suprise",
    width: 100,
  },
];

const data = [];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>