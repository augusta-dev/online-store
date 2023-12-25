import AdminPage from "../../components/Admin/Admin";
import AdminSignin from "../../components/Admin/AdminSignin";
import UploadProvider from "../../components/Providers/UploadProvider";
import Providers from "../Providers";
const Admin = (props) => {
	return (
		<Providers>
			<UploadProvider>
				<AdminSignin></AdminSignin>
			</UploadProvider>
		</Providers>
	);
};
export default Admin;
