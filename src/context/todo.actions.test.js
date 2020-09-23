import {
  setTodos,
  addTodo,
  removeTodo,
  SET_TODOS,
  ADD_TODO,
  REMOVE_TODO,
} from "./todo.actions";

describe("todo.actions", () => {
  describe("setTodos", () => {
    it("should dispatch action with type SET_TODOS", () => {
      expect(setTodos({ 0: { description: "todo!" } })).toEqual({
        type: SET_TODOS,
        data: {
          0: {
            description: "todo!",
          },
        },
      });
    });
  });

  describe("addTodo", () => {
    it("should dispatch action with type ADD_TODO", () => {
      expect(addTodo(0, "new todo!")).toEqual({
        type: ADD_TODO,
        data: {
          id: 0,
          description: "new todo!",
        },
      });
    });
  });

  describe("removeTodo", () => {
    it("should dispatch action with type REMOVE_TODO", () => {
      expect(removeTodo(0)).toEqual({
        type: REMOVE_TODO,
        data: {
          id: 0,
        },
      });
    });
  });
});
