import { boot } from "quasar/wrappers";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default boot(({ app }) => {});
export { Chart, registerables };