import Index from "./views/Index";
import { Router } from "@reach/router";
import SpecificMovie from "./components/specificMovie/SpecificMovie";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		Notification.requestPermission(function (status) {
			console.log("Permission status: ", status);
		});
	}, []);
	// function displayNotification() {
	// 	if (Notification.permission === "granted") {
	// 		navigator.serviceWorker.getRegistration().then(function (reg) {
	// 			reg.showNotification("Hello world!");
	// 		});
	// 	}
	// }

	return (
		<div className="App">
			{/* <button onClick={() => displayNotification()}>Notify</button> */}
			<Router>
				<Index path="/" />
				<SpecificMovie path="/:id" />
			</Router>
		</div>
	);
}
export default App;
