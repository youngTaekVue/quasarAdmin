<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">API 항목</th>
              <th scope="col">Comments</th>
            </tr>
          </thead>
          <tbody id="table1"></tbody>
        </table>
      </div>
      <div class="col-2"></div>
      <div class="col-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">API 항목</th>
              <th scope="col">데이터</th>
            </tr>
          </thead>
          <tbody id="table2"></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from "boot/axios";
onMounted(() => {
  onloadJson();
});

function onloadJson() {
  let target1Arr = [];
  let target2Arr = [];

  api
    .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
    .then(function (response) {
      target1Arr = response.data.results;
      //access your JSON file through the variable "json"
      for (var key in target1Arr) {
        var div1 =
          "<tr id='" +
          target1Arr.name +
          "'>" +
          '<td scope="col">' +
          key +
          "</td>" +
          '<td scope="col">' +
          target1Arr[key] +
          "</td>" +
          "</tr>;";
        // target1Arr.push(key);

        //  $("#table1").append(div1);
      }
      console.log(div1);
    });

  // 임시로 get_cert...json 정의함.
  // $.getJSON("part1/test.json", function (json) {
  //   //access your JSON file through the variable "json"
  //   for (var key in json) {
  //     var div1 =
  //       "<tr id='" +
  //       key +
  //       "'>" +
  //       '<td scope="col">' +
  //       key +
  //       "</td>" +
  //       '<td scope="col">' +
  //       json[key] +
  //       "</td>" +
  //       "</tr>;";
  //     target1Arr.push(key);
  //     $("#table1").append(div1);
  //   }
  // });

  // $.getJSON("part1/test1.json", function (json) {
  //   for (var key in json) {
  //     var div2 =
  //       '<tr class="rowColumn" id="' +
  //       key +
  //       '">' +
  //       '<td scope="col">' +
  //       key +
  //       "</td>" +
  //       '<td scope="col">' +
  //       json[key] +
  //       "</td>" +
  //       "</tr>;";
  //     target2Arr.push(key);
  //     $("#table2").append(div2);
  //   }
  //   console.log(target1Arr.sort());
  //   console.log(target2Arr.sort());
  //   let intersection = target1Arr.filter((x) => !target2Arr.includes(x));
  //   intersection.forEach((element) => $("#" + element).addClass("text-danger"));
  // });
}
</script>