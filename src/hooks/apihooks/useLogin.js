import axios from 'axios';
import { address } from '../../config/routes';

function useLogin() {
    const loginHandler = async (user_id, password) => {
        try {
            const response = await axios.post(address.LOGIN, { email:user_id, password:password });
            return response.data; // Return the response data if needed
        } catch (error) {
            // Handle errors based on the status code
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        // Handle 401 error (Unauthorized)
                        console.error("Unauthorized access. Please check your credentials.");
                        break;
                    case 500:
                        // Handle 500 error (Server Error)
                        console.error("Server error. Please try again later.");
                        break;
                    default:
                        console.error("An unexpected error occurred:", error.message);
                }
            } else {
                // Handle network errors or other issues
                console.error("Network error or request issue:", error.message);
            }
        }
    };

    return { loginHandler };
}

export default useLogin;
