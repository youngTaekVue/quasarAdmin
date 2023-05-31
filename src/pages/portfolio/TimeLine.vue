<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry
        title="Quasar Framework Study start"
        subtitle="Jan 19, 2023"
        side="left"
      >
        <div>
          지금까지 bootstrap, vuetify 등 여러 라이브러리 프레임워크를 사용한적이
          있어 Quasar 또한 비슷한 류라고 생각했지만, 프론트 개발자로서 그리고 더
          발전하고 싶은 개발자의 한명으로서 제대로 Qusar를 공부해보고 싶어
          Study를 시작하였다.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="buttonStyle 정의중"
        subtitle="Jan 25, 2023"
        side="right"
      >
        <div></div>
      </q-timeline-entry>

      <q-timeline-entry
        title="테이블 및 타임라인 반응형"
        subtitle="February 22, 2023"
        side="left"
      >
        <div>
          기존
          <pre> import { Screen } from "quasar";</pre>
          를 통해 화면을 로딩할때, 화면에 맞는 렌더링을 했었는데... 바보같은
          코드였다
          <pre>
            let layout = computed(() => {
            return Screen.lt.sm ? true : Screen.lt.md ? false : false;
          });
</pre
          >
          로 구분을 하면 되었던것.... 그리고 마침, Pinia는 Vue용 저장소
          라이브러리로 구성 요소/페이지 간에 상태를 공유할 수 있습니다.
          Composition API에 익숙하다면 이미 간단한 export const state =
          reactive({})로 전역 상태를 공유가능. Pinia를 봐둬야겠다.
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="Event Title"
        subtitle="May 15, 2023"
        side="right"
      >
        <div>
          JSON Formatter를 만드는중<br />
          1. vue-json-pretty로 호출하고자 하는 json을 불러옴<br />
          2. 비교하고자 하는 json 또는 text를 입력함.(textarea로 값을 받다보니
          json parse 처리 후 비교 예정 - 작업중)
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="JSON Formatter"
        subtitle="May 16, 2023"
        side="right"
      >
        <div>
          입력값을 넣어 정렬은 했지만..모든 문자열을 자르고 replace 로 변환이
          아닌 다른 방법이 필요할듯.
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        title=" Skeleton 적용"
        subtitle="May 30, 2023"
        side="right"
      >
        <div>
          Skeleton 적용<br />
          어떻게 적용해야될지... 고민은 있었지만 막상 해보니 간단한 작업이였다.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { computed } from "vue";
import { useCounterStore } from "stores/counter";
import { storeToRefs } from "pinia";

const $q = useQuasar();
const store = useCounterStore();

// Option 2: use computed and functions to use the store
const count = computed(() => store.counter);
const doubleCountValue = computed(() => store.doubleCount);
const incrementCount = () => store.increment(); // use action
const decrementCount = () => store.counter--; // manipulate directly

// Option 3: use destructuring to use the store in the template
const { counter, doubleCount } = storeToRefs(store); // state and getters need "storeToRefs"
const { increment } = store; // actions can be destructured directly

// layout = computed(() => {
//   return new $q.screen.lt.sm()
//     ? "dense"
//     : $q.screen.lt.md
//     ? "comfortable"
//     : "loose";
// });
</script>
