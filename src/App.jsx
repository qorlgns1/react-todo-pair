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

  const handleOnClick = (e) => {
    // input에 입력된 글자를 가지고 와야 한다.

    // 1. input 정보를 찾아온다.
    const input = document.getElementsByTagName("input")[0];
    const inputValue = input.value;
    debugger;
  };

  return (
    <>
      <h1>ToDoList</h1>
      <input type="text" />
      <Button onClick={handleOnClick}>버튼</Button>
      <TodoListContainer></TodoListContainer>
    </>
  );
}

export default App;
