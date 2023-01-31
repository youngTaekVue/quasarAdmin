//23.01.31  vue-apexcharts로 받으면... error 왜 그런지는 좀 찾아봐야할듯;
import VueApexCharts from "vue3-apexcharts";
import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
    app.use(VueApexCharts);
});