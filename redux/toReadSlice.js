import {createSlice} from '@reduxjs/toolkit';

let id = 0;
export const toReadSlice = createSlice({
  name: 'toRead',
  initialState: {
    toRead_list: [],
    selectItem: []
  },
  reducers: {
    addBook: (state, action) => {
      state.toRead_list = [
        ...state.toRead_list, {
          id: ++id,
          address: action.payload.address,
          author: action.payload.author,
          image: action.payload.image
        }
      ];
    },
    deleteToRead: (state, action) => {
      state.toRead_list = [
        ...state
          .toRead_list
          .filter(toread => toread.id != action.payload)
      ];
    },
    getItemDetails: (state, action) => {
      let {toRead_list} = state;
      let arrayOfdata = []
      for (var x in toRead_list) {
        if (toRead_list[x].id === action.payload) {
          arrayOfdata.push(toRead_list[x])
        }
      }
      state.selectItem = arrayOfdata

    },
    editTodo: (state, action) => {

      let {toRead_list} = state;

      console.log(state)
      let selected_item_id = state['selectItem'][0].id
      let updated_address = action['payload'].address
      let updated_author = action['payload'].author

      for (var x in toRead_list) {
        if (toRead_list[x].id === selected_item_id) {
          toRead_list[x].address = updated_address
          toRead_list[x].author = updated_author
        }
      }

    },
    deleteAllRead: (state, action) => {
      state.toRead_list = [];
    }
  }
});

export const {
  addBook,
  deleteToRead,
  deleteAllRead,
  getItemDetails,
  editTodo
} = toReadSlice.actions;

export const selectToRead = state => state.toRead_list;

export default toReadSlice.reducer;
