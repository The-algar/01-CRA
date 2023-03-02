import styled from 'styled-components';

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <p>
          A simple react component modal with custom layout and animation.
        </p>
          <AppLink href="https://openclassrooms.com/fr/dashboard/paths#path-516" target="_blank" rel="noopener noreferrer">
          I learned React with OpenClassrooms'<br /> "Application Developer - JavaScript React" training
          </AppLink>
      </AppHeader>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLink = styled.a`
  color: #61dafb;
`;