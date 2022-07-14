import "./App.css";
import Balance from "./Balance/Balance";

function App() {
  return (
    <div className="App">
      <body>
        <Balance />
        Spending - Last 7 days mon tue wed thu fri sat sun Total this month
        $478.33 +2.4% from last month
      </body>
    </div>
  );
}

export default App;
