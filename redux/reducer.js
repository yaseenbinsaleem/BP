const INITIAL_STATE = {
  // userName: "Basit",
  // age: 12,
  api: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);

  if (action.type === "DATAFROMAPI") {
    state.api = action.apiData;
    return { ...state, ...action };
  }
  
  return state;
  
};

export default reducer;
// sir yeh reducer mai initial state kiu bnai hai yehi kaam hum action mai bhi to kar sakte the directly ya getdata ko 
// ko directly yahi import karke api:[] k andar save karwa dete humne home mai import krk dispatch kiu kia 

// reducer or action mai farq bta den

// useselector or import getdata wale kaam ka difference

// uselector or props mai difference

// isme multiple reducers k sath kese kaam karsakte hain jese initial state mai to apne api ka data rakh dia hai
// usko aap useselector k through aap kahi bhi call karke use karsakte hai, to useseletor se hum sirf store 
// se hi data mangwa skte hai?