import React from "react";
import styled from "styled-components";
import AddForm from "../components/AddForm";
import TodoList from "../components/TodoList";
const Home = () => {
  return (
    <>
      <Header>
        <h2>Timeattck Todo-list</h2>
      </Header>
      <Main>
        <FormContainer>
          <AddForm />
        </FormContainer>
        <TodoContainer>
          <TodoList />
        </TodoContainer>
        <DoneContainer></DoneContainer>
      </Main>
      <Footer />
    </>
  );
};

export default Home;

const Header = styled.div``;
const Main = styled.div``;
const FormContainer = styled.div``;
const TodoContainer = styled.div``;
const DoneContainer = styled.div``;
const Footer = styled.div``;
