import styled from "styled-components";

const TodoListContainer = styled.ul`
  margin-top: 20px;
  border: 1px solid black;
  min-height: 300px;
`;

const Button = styled.button`
  margin-left: 10px;
`;

function App() {
  // function test() {
  //   console.log(123);
  // }

  const test = (e) => {
    debugger;
    console.log(e);
    if (e.type === "click") {
      console.log("나 클릭했어!!!");
    } else {
      console.log("나 클릭안했어!!");
    }
  };

  return (
    <>
      <h1>ToDoList</h1>
      <input type="text" />
      <Button onClick={test}>버튼</Button>
      <TodoListContainer></TodoListContainer>
    </>
  );
}

export default App;
