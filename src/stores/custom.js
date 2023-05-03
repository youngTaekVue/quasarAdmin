import userList1 from "src/assets/data/sampleData1.json";
import userList2 from "src/assets/data/sampleData2.json";
import userList3 from "src/assets/data/sampleData3.json";
export const useJsonStore = function(param) {
    switch (param) {
        case "1":
            return userList1;
        case "2":
            return userList2;
        case "3":
            return userList3;
        default:
            return null;
    }
};