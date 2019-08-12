import { ADD_COMM } from "../constants";
import { selectUsers, selectReviews, selectRestaurants } from "../selectors";
import { GeneratedId } from "generate-id";

export default store => next => action => {
  console.log("before", store.getState());
  console.log("action", action);
  switch (action.type) {
    case ADD_COMM:
      const restId = action.payload.rest;
      const user = action.payload.user;
      const comm = action.payload.comm;

      const state = store.getState();
      const userState = selectUsers(state);
      const reviewState = selectReviews(state);
      const restState = selectRestaurants(state);
      var GenerateId = require("generate-id");
      const g = new GenerateId();
      var uid = null;
      for (var i in userState) {
        var us = userState[i];
        if (us.name === user) {
          uid = us.id;
          break;
        }
      }
      if (!uid) {
        uid = g.generate(25);
        userState.push({ id: uid, name: user });
      }
      const cid = g.generate(25);
      reviewState.push({
        id: cid,
        userId: uid,
        text: comm,
        rating: 5 /*не успел прикрутить рейтинг, сорри )*/
      });
      restState.find(r => r.id === restId).reviews.push(cid);
      //данные добавляются, но при следующей отрисовке исчезают :(
      debugger;
      break;
  }
  next(action);
  console.log("after", store.getState());
};
