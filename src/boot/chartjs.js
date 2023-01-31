import { boot } from "quasar/wrappers";
import VueChartJs from "vue-chartjs";

export default boot(({ app }) => {
    app.use(VueChartJs);
});