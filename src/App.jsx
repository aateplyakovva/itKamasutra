import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Nav/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path='/dialogues' render={() => (<DialoguesContainer/>)}/>
					<Route path='/profile/:userId?' render={() => (<ProfileContainer/>)}/>
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
