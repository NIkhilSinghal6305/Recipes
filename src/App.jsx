import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-800 text-white font-thin flex flex-col">
      <Navbar />
      <div className="flex-1 px-20 py-[30px] mt-[11vh]">
        <Mainroutes />
      </div>
    </div>
  );
};

export default App;
