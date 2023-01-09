import styled from "styled-components";

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
  @media (min-width: 1024px) {
    margin-top: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  max-width: 611px;
  margin: 0 auto;
  flex-direction: column;
  padding: 20px 0;

  @media (min-width: 1024px) {
    padding: 70px 0;
    max-width: 937px;
  }
`;

export const PageTitle = styled.h1`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  margin-left: 15px;
  color: #ffffff;
  @media (min-width: 1024px) {
    font-size: 43px;
    margin-left: 0px;
  }
`;

export const Loading = styled.img``;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

export const LeftContainer = styled.div`
  width: 100%;
  max-width: 611px;
`;

export const ZeroPost = styled.div`
  width: 100%;
  background-color: #171717;
  border-radius: 15px;
  padding: 15px 15px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  color: #ffffff;
`;
