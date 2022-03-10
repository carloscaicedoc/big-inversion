import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName={"Simone"} firstName={"Nina"} age={39} hairColor={"Black"} location="Chicago"></PersonCard>
      <PersonCard lastName={"Alice"} firstName={"Howe"} age={30} hairColor={"Red"} location="San Francisco"></PersonCard>
      <PersonCard lastName={"Moss"} firstName={"Carrie-Anne"} age={54} hairColor={"Dark Brown"} location="Los Angeles"></PersonCard>
    </div>
  );
}

export default App;
