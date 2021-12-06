import styled from "styled-components";
import SearchBar  from "../Searchbar/SearchBar";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8em;
`;

function SearchContainer() {
  return (
    <>
    <AppContainer>
      <SearchBar />
    </AppContainer>
    </>
  );
}

export default SearchContainer;