import { createStore } from 'vuex'

export default createStore({
  state: {
    cards:[
      {
        id: 345345345345,
        title: "Обязательные для всех",
        description:
          "Документы, обязательные для всех сотрудников без исключения",
        status: ["red", "yellow", "orange"],
        open: false,
        subCard: [
          {
            title: "Паспорт",
            status: ["blue"],
            required: "Обязательный",
            role: "Для всех",
            id: 123123,
          },
          {
            title: "ИНН",
            status: [],
            required: "Обязательный",
            role: "Для всех",
            id: 123123324,
          },
        ],
      },
      {
        id: 213123,
        title: "Обязательные для трудоустройства",
        discription: "",
        status: ["green"],
        open: false,
        subCard: [
          {
            title: "Паспорт",
            status: ["blue"],
            required: "Обязательный",
            role: "Для всех",
            id: 1231323,
          },
          {
            title: "ИНН",
            status: [],
            required: "Обязательный",
            role: "Для всех",
            id: 123324,
          },
        ],
      },
    ],
    mainOtherCards:[
      {
        id: 3453453445, 
        title: "Тестовое задание кандидата",
        description:
          "Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха",
        status: ["red", "yellow", "orange"],
        open: false,
        subCard: []
      },
      
    ],
    subOtherCards:[
      {
        title: "Мед. книжка",
        status: [],
        required: "",
        role: "Для всех",
        id: 12324,
      },
      {
        title: "Тестовое задание кандидата",
        status: [],
        required: "",
        role: "Для всех",
        id: 12324,
      },
  ]

  },

  getters: {
  },
  mutations: {
    updateCards(state, [val, type]){
      state[type] = val
    },
    changeModal(state, type){
      state.modal = type
    },
    select(state, value = {}) {
      state.selected = value
    }
  },
  actions: {
  },
  modules: {
  }
})
