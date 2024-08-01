
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import TeamsPage from "./pages/TeamsPage";
import NotFoundPage from "./pages/NotFound";
import TeamDetailsPage from "./pages/TeamDetailsPage";
import ChannelDetailsPage from "./pages/ChannelDetailsPage";
import MessagesPage from "./pages/MessagesPage";
import MessageDetailsPage from "./pages/MessageDetailsPage";
import TasksPage from "./pages/TasksPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import BoardsPage from "./pages/Boards";
import BoardDetailsPage from "./pages/BoardDetails";
import Menu from '../src/components/Menu';
import CreateBoard from "./pages/CreateBoard";


const App = () => {
  console.log("hey")
  return (
    <>
      <Menu />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />

          <Route exact path="/teams" element={<TeamsPage />} />

          <Route exact path="/teams/:teamId" element={<TeamDetailsPage />} />
          <Route path="/create-board" element={<CreateBoard />} />
          <Route
            exact
            path="/teams/:teamId/channels/:channelId"
            element={<ChannelDetailsPage />}
          />

          <Route
            exact
            path="/channels/:channelId/messages"
            element={<MessagesPage />}
          />
          <Route
            exact
            path="/channels/:channelId/messages/:messageId"
            element={<MessageDetailsPage />}
          />

          <Route
            exact
            path="/channels/:channelId/tasks"
            element={<TasksPage />}
          />
          <Route
            exact
            path="/channels/:channelId/tasks/:taskId"
            element={<TaskDetailsPage />}
          />

          <Route exact path="/boards" element={<BoardsPage />} />
          <Route exact path="/boards/:boardId" element={<BoardDetailsPage />} />

          <Route path="/create-team" component={CreateTeam} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
