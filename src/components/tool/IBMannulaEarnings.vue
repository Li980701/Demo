<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 10 }"
    :scroll="{ y: 400 }"
  />
</template>
<script>
// import axios as required
import axios from "axios";
axios({
  //Use IBM Api
  url:
    "https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=demo",
  // Promise can be used defautly
}).then((res) => {
  // Push IBM annualEarnings data into table
  for (let i = 0; i < res.data.annualEarnings.length; i++) {
    data.push({
      key: i,
      CompanyName: res.data.symbol,
      AnnualEarnings: res.data.annualEarnings[i].reportedEPS,
      date: res.data.annualEarnings[i].fiscalDateEnding,
    });
  }
});
const columns = [
  {
    title: "Company Name",
    dataIndex: "CompanyName",
    width: 150,
  },
  {
    title: "Finacial Year Ending Date",
    dataIndex: "date",
    width: 150,
  },
  {
    title: "AnnualEarnings",
    dataIndex: "AnnualEarnings",
    width: 150,
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