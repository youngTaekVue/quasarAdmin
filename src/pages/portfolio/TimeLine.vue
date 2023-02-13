<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading>
        Timeline heading{{ store.counter }}
        <br />
        ({{
          $q.screen.lt.sm ? "Dense" : $q.screen.lt.md ? "Comfortable" : "Loose"
        }}
        layout)
      </q-timeline-entry>

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

      <q-timeline-entry heading>November, 2017</q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 11, 2023"
        side="left"
        color="orange"
        icon="done_all"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="테이블 및 타임라인 반응형"
        subtitle="February 22, 1986"
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
    </q-timeline>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { computed } from "vue";
import { useCounterStore } from "stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();

// Option 2: use computed and functions to use the store
const count = computed(() => store.counter);
const doubleCountValue = computed(() => store.doubleCount);
const incrementCount = () => store.increment(); // use action
const decrementCount = () => store.counter--; // manipulate directly

// Option 3: use destructuring to use the store in the template
const { counter, doubleCount } = storeToRefs(store); // state and getters need "storeToRefs"
const { increment } = store; // actions can be destructured directly

// const $q = useQuasar();

//   layout =  computed(() => {
//     return $q.screen.lt.sm
//       ? "dense"
//       : $q.screen.lt.md
//       ? "comfortable"
//       : "loose";
//   }),
</script>
