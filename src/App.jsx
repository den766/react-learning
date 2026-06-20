// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Day1Counter from "./experiments/week1/day1-counter/Day1Counter";
import Footer from "./experiments/week1/day2-components/Footer";
import Header from "./experiments/week1/day2-components/Header";
import NoteList from "./experiments/week1/day2-components/noteList";
import Demojsx from "./experiments/week1/day3-jsx/Tutorial";
import Name from "./experiments/week1/day3-jsx/Practice";
import RenderNames from "./experiments/week1/day3-jsx/render";
import DebugExercise from "./experiments/week1/day3-jsx/DebuggingExercise";
import Notecard2 from "./experiments/week1/day4-props/notecardprops";
import ProductCard from "./experiments/week1/day4-props/productCard";
import NoteList2 from "./experiments/week1/day4-props/noteList2";
import Counter from "./experiments/week1/day5-state/counter";
import ClickEvent from "./experiments/week1/day6-events/events";
import CountEvent from "./experiments/week1/day6-events/eventCount";
import ToggleMsg from "./experiments/week1/day6-events/toggle";
import RandomNumber from "./experiments/week1/day6-events/random";
import CounterRevise from "./experiments/week1/day7-revision/revision";
import NoteListRevise from "./experiments/week1/day7-revision/noteListRevise";
import TogglemsgRevise from "./experiments/week1/day7-revision/togglemesage";
import TaskInputForm from "./experiments/week1/week2/day1comparchitecture/TaskInput";
import TaskList from "./experiments/week1/week2/day1comparchitecture/taskLists";
import PlayerCard from "./experiments/week1/week2/day2compcommunication/propsnew";
import CounterControls from "./experiments/week1/week2/day3-liftingstateup/counterControls";
import CounterDisplay from "./experiments/week1/week2/day3-liftingstateup/counterDisplay";
import SubApp from "./experiments/week1/week2/day3-liftingstateup/stateup";
import NoteApp from "./experiments/week1/week2/day3-liftingstateup/mininoteAppSearch/noteApp";
import ControlledInput from "./experiments/week1/week2/day4-statedrivenInputs/controlledInput";
import FormHandling from "./experiments/week1/week2/day4-statedrivenInputs/formhandling";
import App2 from "./experiments/week1/week2/day5-crud/main";
import Effect from "./experiments/week3/day1-sideeffects/sideeffect";
import Good from "./experiments/week3/day1-sideeffects/goodeffect";
import Timer from "./experiments/week3/day1-sideeffects/timer";
import TimerP from "./experiments/week3/day1-sideeffects/timerparent";
import EffectExp from "./experiments/week3/day2-useeffect/effect";
import DepArrExperiment from "./experiments/week3/day2-useeffect/dependencyarray";
// import InfiniteLoop from "./experiments/week3/day3-infiniteloop/infiniteloop";
import SafeUseEffect from "./experiments/week3/day3-infiniteloop/safeuseeffect";
import FetchUsers from "./experiments/week3/day4-fetchingData/fetchingdata";
import FetchUsers2 from "./experiments/week3/day4-fetchingData/debugging";
import Uistates from "./experiments/week3/day4-uistates/uistates";
import EmptyState from "./experiments/week3/day4-uistates/emptystate";
import FetchUserPosts from "./experiments/week3/day4-uistates/challange";
import CleanUp from "./experiments/week3/day6-cleanupfns/cleanup";
import CleaningFn from "./experiments/week3/day6-cleanupfns/cleaning";
import ToggleShow from "./experiments/week3/day6-cleanupfns/toggleshow";
import UseRefPractice from "./experiments/week4/day1-useref/useref";
import RefPractice1 from "./experiments/week4/day1-useref/userefPractice";
import DomAcessusingRef from "./experiments/week4/day1-useref/domaccesusingref";
import RefVsVariable from "./experiments/week4/day1-useref/normalvariablevsref";
import FocusInput from "./experiments/week4/day1-useref/challenge";
import PreviousCountTracker from "./experiments/week4/day1-useref/challenge";
import RefVsState from "./experiments/week4/day2-state_vs_ref/statevsref";
import RenderCounter from "./experiments/week4/day2-state_vs_ref/rendercounter";
import ControlledInput1 from "./experiments/week4/day2-state_vs_ref/controlledvsuncontrolled";
import UnControlledInput from "./experiments/week4/day2-state_vs_ref/controlledvsuncontrolled";
import CounterWeek4 from "./experiments/week4/day3-customhooks/customhook";
import CounterWeek42 from "./experiments/week4/day3-customhooks/customhook2";
import Toggle3 from "./experiments/week4/day3-customhooks/customtoggle";
import ToggleNew3 from "./experiments/week4/day4-realcustomhooks/customhooknew";
import MenuOpenClose from "./experiments/week4/day4-realcustomhooks/menuopenclose";
import UserInput from "./experiments/week4/day4-realcustomhooks/useinput";
import Welcome from "./experiments/week4/day4-realcustomhooks/TsDay1/welcome";
import UserCard from "./experiments/week4/day4-realcustomhooks/TsDay1/usercard";
import User1 from "./experiments/week4/day4-realcustomhooks/TsDay1/user";
import Profile from "./experiments/week4/day4-realcustomhooks/TsDay1/profile";
import GetUser from "./experiments/week4/day5-usefetchhook/usefetch";
import DemoUsers from "./experiments/week4/day5-usefetchhook/TS-Day2/demousers";
GetUser;
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./experiments/week5/day2/navbar";
import Settings from "./pages/settings";
import Profile2 from "./pages/profile";
import DynamicRouter from "./experiments/week5/day3-dynamicrouting/dynamicrouting";
import User from "./pages/user";
import ProductPage from "./experiments/week5/day3-dynamicrouting/productdynamic";
import ProductsD from "./pages/product";
import RoomRouting from "./experiments/week5/day3-dynamicrouting/hotelroomsrouting";
import Room from "./pages/rooms";
import DashBoardLayout from "./experiments/week5/day4-nestedrouting/nestedrouting";
import ProtectedRoute from "./experiments/week5/day5-protectedrouting/protectedrouting";
import ProtectedDashboard from "./experiments/week5/day5-protectedrouting/protectedrouting2";
import Login from "./pages/login";
import DemoDashboard1 from "./pages/demodashboard";
import ProtectedRoute2 from "./experiments/week5/day5-protectedrouting/protectedroute";
import GuestRouting from "./experiments/week5/day5-protectedrouting/guestrouting";
import CoutWeek6 from "./experiments/week6/day1-localvsglobalstate/localvsglobal";
import ExpenseMain from "./experiments/week6/day2-propsdrilling/expensemain";
import ThemeProvider from "./context/Themecontent";
import NavBar3 from "./experiments/week6/day3-contextapi/navbarday3";
import Profile3 from "./experiments/week6/day3-contextapi/proifleday3";
function App() {
  // const [tasks, setTasks] = useState([]);

  // function addTask(newTask) {
  //   setTasks([...tasks, newTask]);
  // }

  // function deleteTask(indexToDelete) {
  //   setTasks((prev) => prev.filter((_, index) => index !== indexToDelete));
  // }

  // const rooms = [
  //   { id: 101, type: "Deluxe", price: 2000 },
  //   { id: 102, type: "Suite", price: 3500 },
  //   { id: 103, type: "Standard", price: 1500 },
  // ];

  // const [isLoggedIn, setisLogedIn] = useState(false);

  return (
    <div>
      {/* <Day1Counter /> */}
      {/* <Header />
      <NoteList /> */}
      {/* <Demojsx />
      <Name /> */}
      {/* <RenderNames />
      <DebugExercise/> */}
      {/* <Notecard2 title="Learn React" category="Programming"/>
      <Notecard2 title="Learn Nodejs"/>
      <Notecard2 title="Learn Arrays"/>

      <ProductCard title="Laptop" price="100000" rating="4.5"/>
      <ProductCard title="Iphone 17" price="80000" rating="4.7"/>
      <ProductCard title="bag" price="1000" rating="4"/> */}
      {/* <NoteList2/> */}
      {/* <Counter/> */}
      {/* <ClickEvent/>
      <CountEvent/>
      <ToggleMsg/>
      <RandomNumber/> */}
      {/* <CounterRevise/>
      <NoteListRevise/>
      <TogglemsgRevise/> */}
      {/* <TaskInputForm/> */}
      {/* <Footer /> */}
      {/* <h1>Task Manager</h1> */}

      {/* <TaskInputForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask}/>
      <PlayerCard/> */}

      {/* <SubApp/> */}
      {/* <NoteApp/> */}
      {/* <ControlledInput/> */}
      {/* <FormHandling/> */}
      {/* <App2/> */}
      {/* <Effect/> */}
      {/* <Good/> */}
      {/* <TimerP/> */}
      {/* <EffectExp/> */}
      {/* <DepArrExperiment/> */}
      {/* <InfiniteLoop/> */}
      {/* <SafeUseEffect/> */}
      {/* <FetchUsers2/> */}
      {/* <Uistates/> */}
      {/* <EmptyState/> */}
      {/* <FetchUserPosts/> */}
      {/* <CleanUp/> */}
      {/* <CleaningFn/> */}
      {/* <ToggleShow/> */}
      {/* <UseRefPractice/> */}
      {/* <RefPractice1/> */}
      {/* <DomAcessusingRef/> */}
      {/* <RefVsVariable/> */}
      {/* <FocusInput/> */}
      {/* <PreviousCountTracker/> */}
      {/* <RefVsState/> */}
      {/* <RenderCounter/> */}
      {/* <ControlledInput1/> */}
      {/* <UnControlledInput /> */}
      {/* <CounterWeek4/>
       <CounterWeek42/> */}
      {/* <Toggle3/> */}
      {/* <ToggleNew3/> */}
      {/* <MenuOpenClose/> */}
      {/* <UserInput/> */}
      {/* <Welcome/>
       <User1/> */}
      {/* <Profile/> */}
      {/* <GetUser/> */}
      {/* <DemoUsers/> */}
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/profile" element={<Profile2/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
      </Routes> */}

      {/* <DynamicRouter />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:id" element={<User/>}></Route>
      </Routes> */}
      {/* <ProductPage/>
      <Routes>
        <Route path="product/:productid" element={<ProductsD/>}></Route>
      </Routes> */}
      {/* <RoomRouting rooms={rooms}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/room/:id" element={<Room rooms={rooms}/>}></Route>
      </Routes> */}
      {/* <DashBoardLayout/> */}

      {/* <Routes>
      <Route path="/dashboard" element={<DashBoardLayout/>}>
         <Route index element={<h2>Dashboard Home</h2>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="settings" element={<Settings />} />
      </Route>
     </Routes> */}

      {/* <ProtectedRoute/> */}
      {/* <ProtectedDashboard /> */}

      {/* <Routes>
        <Route
          path="/login"
          element={
            <GuestRouting isLoggedIn={isLoggedIn}>
              <Login setisLogedIn={setisLogedIn} isLoggedIn={isLoggedIn} />
            </GuestRouting>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute2 isLoggedIn={isLoggedIn}>
              <DemoDashboard1
                setisLogedIn={setisLogedIn}
                isLoggedIn={isLoggedIn}
              />
            </ProtectedRoute2>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute2 isLoggedIn={isLoggedIn}>
              <Profile2 />
            </ProtectedRoute2>
          }
        ></Route>
        <Route
          path="/settings"
          element={
            <ProtectedRoute2 isLoggedIn={isLoggedIn}>
              <Settings />
            </ProtectedRoute2>
          }
        ></Route>
      </Routes> */}

      {/* <CoutWeek6/> */}
      {/* <ExpenseMain/> */}
      <ThemeProvider>
        <NavBar3/>
        <Profile3/>
      </ThemeProvider>
    </div>
  );
}

export default App;
