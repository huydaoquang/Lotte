import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Home/Sidebar/Sidebar";
import Login from "./components/Login";
import Setting from "./components/Setting";
import TransactionManagement from "./components/TransactionManagement";
import OrderManagement from "./components/OrderManagement";
import ManageTicketType from "./components/ManageTicketType";
import CustomerManagement from "./components/CustomerManagement";
import Report from "./components/Report";

function App() {
	return (
		<Router>
			<div className="min-h-screen flex">
				<Sidebar />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Dashboard />} />
					<Route path="/setting" element={<Setting />} />
					<Route path="/quan-ly-don-hang" element={<OrderManagement />} />
					<Route path="/quan-ly-loai-ve" element={<ManageTicketType />} />
					<Route path="/quan-ly-khach-hang" element={<CustomerManagement />} />
					<Route path="/bao-cao" element={<Report />} />
					<Route
						path="/quan-ly-giao-dich"
						element={<TransactionManagement />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
