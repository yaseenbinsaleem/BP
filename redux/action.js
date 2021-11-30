const getData = (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: "DATAFROMAPI",
        apiData: json,
      });
    });
};

export { getData };
// isme humne aik api call ki hai isi tarha or api call karke hum yaha se export karwa sakte hai? or 
// export krwa kiu rhe hai kisi page per use karne k liye ya reducer mai use karne k liye or 
// agar kisi page per use karne k liye kar rhe hai to issey store mai save karwa lete to ye humey useselector
//  mai recive ho jata