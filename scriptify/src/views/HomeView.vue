<template>
    <div class="home-view">

    <button class = "btn-start" @click="handleButtonClick">
      <font-awesome-icon class = "fa-2x"  :icon="['fas', 'pen-to-square']" />
    </button>

    <InputComponent
      v-if="showInput && isFirst"
      @send-input="handleMessage"
    />
    <SecondInputComponent
      v-else-if="showInput && !isFirst"
      @handle-line="handleLine"
      @handle-scenario-change="handleScenarioChange"
      @handle-detail="handleDetail"
    />
      <div class="chat-container">
        <BubbleChatComponent :messages="messages" :lines="lines" :details="details" :newScenarios="newScenarios"/>
      </div>

    </div>
    
</template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import InputComponent from '@/components/chat/InputComponent.vue';
  import BubbleChatComponent from '@/components/chat/BubbleChatComponent.vue';
  import SecondInputComponent from '@/components/chat/SecondInputComponent.vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  
  // 채팅 메시지들
  const chatMessages = ref([]);
  const showInput = ref(false);
  const messages = ref([])
  const cnt = ref(0)
  const isFirst = ref(true)
  const lines = ref([])
  const details = ref([])
  const newScenarios = ref([])

  // 메시지를 처리하는 함수
  const handleButtonClick = () => {
    if (!showInput.value) {
      // 첫 번째 버튼 클릭 시 InputComponent 표시
      showInput.value = true;
    } else {
      // 두 번째 버튼 클릭 시 SecondInputComponent로 전환
      isFirst.value = false;
    }
  };
  const handleMessage = (input) => {
    isFirst.value = false
    showInput.value = false;
    const url = 'tempurl'
    console.log(url)
    console.log(input);
    const response = {
      statusCode: 201,
      type: "first",
      data: {
        scenarioId: 1,
        scenario: {
          opening: {
            scenery: "19세기 저녁, 흐린 날씨",
            content:
              "그레이트 애비뉴를 따라 조용한 비포장 도로가 펼쳐지고, 런던의 저녁녘은 안개에 휩싸여 있다. 경찰 중위인 아서 헨리(30, 남성, 중간 키에 날씬하고 긴 머리, 선한 눈빛)는 날카로운 감각으로 범죄를 쫓아 다닌다. 그의 가장 친한 친구이자 해양 탐험가인 오스카(32, 남성, 근육질, 짙은 금발)에겐 모험심이 강한 성격으로, 사건에 얽히게 된다. 아서와 오스카는 범죄에 대한 이야기를 나누며, 첫 번째 인물인 레자(25, 여성, 긴 갈색 머리, 지혜로운 눈빛)의 실종 사건을 조사하기로 결심한다.",
          },
          prologue: {
            scenery: "다음 날 아침, 안개가 조금 걷힌 런던",
            content:
              "아서와 오스카는 레자의 집에 방문하여 실종에 대한 단서를 찾아 나선다. 그곳에는 레자의 친구인 앤(28, 여성, 외향적이고 친절, 밝은 갈색 눈)을 만난다. 그녀는 레자가 최근에 수상한 인물들과 만나고 있었다고 털어놓고, 남자친구가 있다는 사실까지 얘기한다. 아서와 오스카는 레자의 남자친구를 찾아서 그와의 연결고리에 주목하기 시작한다. 이 과정에서 아서의 호기심이 커지며 사건의 복잡한 면이 드러나기 시작한다.",
          },
          conflict: {
            scenery: "저녁 무렵, 비가 내리기 시작한 런던",
            content:
              "아서와 오스카는 레자의 남자친구인 윌리엄(35, 남성, 외모가 비범한, 하지만 거칠고 어두운 분위기)의 집을 방문한다. 그러나 그곳에서 의외로 윌리엄은 그들의 질문에 날카롭고 이상한 반응을 보인다. 이 과정 중 두 사람은 윌리엄에게 비밀이 있음을 확신하게 된다. 아서와 오스카는 함께 일하면서 서로의 신뢰에 의문을 가지게 되고, 정체성의 위기가 일어난다. 과거의 사건들이 중첩되며 갈등이 심화되고, 이들이 과연 서로의 믿음과 진실을 지킬 수 있을지가 쟁점으로 떠올른다.",
          },
          climax: {
            scenery: "밤, 생생하게 내리기 시작한 폭풍우 속에서",
            content:
              "아서는 우연히 윌리엄이 은밀히 만나는 사람들을 발견하게 되는데, 사실은 레자의 상사인 제이콥(40, 남성, 동료와는 거리가 먼 외로운 인물)이다. 그들은 함께 범죄 조직과 관련된 비밀스러운 거래를 계획하고 있었다. 아서는 급하게 오스카에게 연락해 도움이 필요하다고 알리지만, 폭풍 속에서 둘의 통신이 끊기는 바람에 아서는 혼자서 위험한 상황에 뛰어들게 된다. 아서가 정보의 정체를 발견하는 동시에 윌리엄과 제이콥에게 발각되고, 이들은 아서를 처치하려 든다. 과연 아서는 자신의 능력을 발휘해 저항할 수 있을지, 이 순간이 모든 갈등을 해결하게 되는 절정의 순간이었다.",
          },
          conclusion: {
            scenery: "폭풍이 지나간 아침, 맑은 날씨",
            content:
              "아서와 오스카는 함께 윌리엄과 제이콥을 경찰에 넘기는 데 반 성공했다. 하지만 레자는 여전히 실종 상태로 남아 있다는 사실이 아서에게 큰 부담으로 남는다. 그들은 범죄의 단초를 찾아 나서고 있으며, 아서의 능력을 통해 결국 레자를 구조할 수 있을 것이다. 이야기는 아서가 어둠 속에 잠들었던 진실을 향해 다시 나아가는 모습으로 마무리된다.",
            },
        },
        characters: [
          {
            id: 1,
            name: "아서 헨리",
            age: 30,
            gender: "남성",
            appearance: "중간 키에 날씬하고 긴 머리, 선한 눈빛",
            personality:
              "냉철하고 지혜로우며, 범죄에 대한 강한 호기심을 지닌 경찰 중위",
          },
          {
            id: 2,
            name: "오스카",
            age: 32,
            gender: "남성",
            appearance: "근육질의 체격, 짙은 금발",
            personality: "모험심이 강하고 행동력이 뛰어난 해양 탐험가",
          },
          {
            id: 3,
            name: "레자",
            age: 25,
            gender: "여성",
            appearance: "긴 갈색 머리, 지혜로운 눈빛",
            personality: "신비로운 분위기를 가진 인물로, 실종된 친구",
          },
          {
            id: 4,
            name: "앤",
            age: 28,
            gender: "여성",
            appearance: "외향적이고 친절, 밝은 갈색 눈",
            personality: "레자의 가장 친한 친구로, 사건의 실마리를 제시하는 역할",
          },
          {
            id: 5,
            name: "윌리엄",
            age: 35,
            gender: "남성",
            appearance: "비범한 외모, 거칠고 어두운 분위기",
            personality: "레자의 남자친구로, 사건의 중대한 비밀을 숨기고 있음",
          },
          {
            id: 6,
            name: "제이콥",
            age: 40,
            gender: "남성",
            appearance: "우울해 보이는 외관, 멀리하는 느낌",
            personality: "레자의 상사, 범죄 세계와 연결된 의문의 인물",
            },
          ],
        },
      };
    messages.value.push(
      { id: 1, type: 'request', time: '19세기', 'space': "런던", genre: "추리" },
      { id: response.id, type: 'response', response: response}
  )
  // messages.value = [];

  }
  const handleLine = (input) => {
    console.log('대사')
    showInput.value = false; // 컴포넌트 숨기기
    const response = {
      statusCode: 201,
      type: "line",
      id: 1,
      data: {
        lines: [
          {
            id: 1,
            name: "아서 헨리",
            content: "범인은 당신이야",
          },
          {
            id: 2,
            name: "레자",
            content: "저를 찾아주세요",
          },
          {
            id: 3,
            name: "오스카",
            content: "레자가 실종됐다고?",
          },
          {
            id: 4,
            name: "제이콥",
            content: "증거 있어?",
          },
        ],
      },
    };
    lines.value.push(
      { id: response.id, type: 'line-request'},
      { id: response.id, type: response.type, response: response}
    )

  }
  const handleScenarioChange = (input) => {
    console.log(input)
    showInput.value = false; // 컴포넌트 숨김
    const response = {
      statusCode: 201,
      type: "revise",
      data: {
        scenario: {
          opening: {
            scenery: "19세기 저녁, 흐린 날씨",
            content:
              "그레이트 애비뉴를 따라 조용한 비포장 도로가 펼쳐지고, 런던의 저녁녘은 안개에 휩싸여 있다. 경찰 중위인 아서 헨리(30, 남성, 중간 키에 날씬하고 긴 머리, 선한 눈빛)는 날카로운 감각으로 범죄를 쫓아 다닌다. 그의 가장 친한 친구이자 해양 탐험가인 오스카(32, 남성, 근육질, 짙은 금발)에겐 모험심이 강한 성격으로, 사건에 얽히게 된다. 아서와 오스카는 범죄에 대한 이야기를 나누며, 첫 번째 인물인 레자(25, 여성, 긴 갈색 머리, 지혜로운 눈빛)의 실종 사건을 조사하기로 결심한다.",
          },
          prologue: {
            scenery: "다음 날 아침, 안개가 조금 걷힌 런던",
            content:
              "아서와 오스카는 레자의 집에 방문하여 실종에 대한 단서를 찾아 나선다. 그곳에는 레자의 친구인 앤(28, 여성, 외향적이고 친절, 밝은 갈색 눈)을 만난다. 그녀는 레자가 최근에 수상한 인물들과 만나고 있었다고 털어놓고, 남자친구가 있다는 사실까지 얘기한다. 아서와 오스카는 레자의 남자친구를 찾아서 그와의 연결고리에 주목하기 시작한다. 이 과정에서 아서의 호기심이 커지며 사건의 복잡한 면이 드러나기 시작한다.",
          },
          conflict: {
            scenery: "저녁 무렵, 비가 내리기 시작한 런던",
            content:
              "아서와 오스카는 레자의 남자친구인 윌리엄(35, 남성, 외모가 비범한, 하지만 거칠고 어두운 분위기)의 집을 방문한다. 그러나 그곳에서 의외로 윌리엄은 그들의 질문에 날카롭고 이상한 반응을 보인다. 이 과정 중 두 사람은 윌리엄에게 비밀이 있음을 확신하게 된다. 아서와 오스카는 함께 일하면서 서로의 신뢰에 의문을 가지게 되고, 정체성의 위기가 일어난다. 과거의 사건들이 중첩되며 갈등이 심화되고, 이들이 과연 서로의 믿음과 진실을 지킬 수 있을지가 쟁점으로 떠올른다.",
          },
          climax: {
            scenery: "밤, 생생하게 내리기 시작한 폭풍우 속에서",
            content:
              "아서는 우연히 윌리엄이 은밀히 만나는 사람들을 발견하게 되는데, 사실은 레자의 상사인 제이콥(40, 남성, 동료와는 거리가 먼 외로운 인물)이다. 그들은 함께 범죄 조직과 관련된 비밀스러운 거래를 계획하고 있었다. 아서는 급하게 오스카에게 연락해 도움이 필요하다고 알리지만, 폭풍 속에서 둘의 통신이 끊기는 바람에 아서는 혼자서 위험한 상황에 뛰어들게 된다. 아서가 정보의 정체를 발견하는 동시에 윌리엄과 제이콥에게 발각되고, 이들은 아서를 처치하려 든다. 과연 아서는 자신의 능력을 발휘해 저항할 수 있을지, 이 순간이 모든 갈등을 해결하게 되는 절정의 순간이었다.",
          },
          conclusion: {
            scenery: "폭풍이 지나간 아침, 맑은 날씨",
            content:
              "아서와 오스카는 함께 윌리엄과 제이콥을 경찰에 넘기는 데 반 성공했다. 하지만 레자는 여전히 실종 상태로 남아 있다는 사실이 아서에게 큰 부담으로 남는다. 그들은 범죄의 단초를 찾아 나서고 있으며, 아서의 능력을 통해 결국 레자를 구조할 수 있을 것이다. 이야기는 아서가 어둠 속에 잠들었던 진실을 향해 다시 나아가는 모습으로 마무리된다.",
          },
        },
        characters: [
          {
            id: 1,
            name: "아서 헨리",
            age: 30,
            gender: "남성",
            appearance: "중간 키에 날씬하고 긴 머리, 선한 눈빛",
            personality:
              "냉철하고 지혜로우며, 범죄에 대한 강한 호기심을 지닌 경찰 중위",
          },
          {
            id: 2,
            name: "오스카",
            age: 32,
            gender: "남성",
            appearance: "근육질의 체격, 짙은 금발",
            personality: "모험심이 강하고 행동력이 뛰어난 해양 탐험가",
          },
          {
            id: 3,
            name: "레자",
            age: 25,
            gender: "여성",
            appearance: "긴 갈색 머리, 지혜로운 눈빛",
            personality: "신비로운 분위기를 가진 인물로, 실종된 친구",
          },
          {
            id: 4,
            name: "앤",
            age: 28,
            gender: "여성",
            appearance: "외향적이고 친절, 밝은 갈색 눈",
            personality: "레자의 가장 친한 친구로, 사건의 실마리를 제시하는 역할",
          },
          {
            id: 5,
            name: "윌리엄",
            age: 35,
            gender: "남성",
            appearance: "비범한 외모, 거칠고 어두운 분위기",
            personality: "레자의 남자친구로, 사건의 중대한 비밀을 숨기고 있음",
          },
          {
            id: 6,
            name: "제이콥",
            age: 40,
            gender: "남성",
            appearance: "우울해 보이는 외관, 멀리하는 느낌",
            personality: "레자의 상사, 범죄 세계와 연결된 의문의 인물",
          },
        ],
      },
    };
    newScenarios.value.push(
      { id: 1, type: 'scenario-change-request', content: input},
      { id: response.id, type: response.type, response: response}
    )
  }
  const handleDetail = (input) => {
    console.log('디테일')
    showInput.value = false; // 컴포넌트 숨김
    const response = {
      statusCode: 201,
      type: "detail",
      data: {
        content:
          "아서와 오스카는 레자의 집에 방문하여 실종에 대한 단서를 찾아 나선다. 그곳에는 레자의 친구인 앤(28, 여성, 외향적이고 친절, 밝은 갈색 눈)을 만난다. 그녀는 레자가 최근에 수상한 인물들과 만나고 있었다고 털어놓고, 남자친구가 있다는 사실까지 얘기한다. 아서와 오스카는 레자의 남자친구를 찾아서 그와의 연결고리에 주목하기 시작한다. 이 과정에서 아서의 호기심이 커지며 사건의 복잡한 면이 드러나기 시작한다.",
      },
    };
    details.value.push(
      { id: response.id, type: 'detail-request'},
      { id: response.id, type: response.type, response: response}
    )

  }
  </script>
  
  <style scoped>
  .home-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #d5c2b4 ;
  }
  
  button {
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .chat-container {
    width: 100%;
    max-width: 800px;
    background-color: #f0e5dd;
    
  }
  .btn-start{
    background-color: #d5c2b4 ;
  }
  </style>
  
  
