import axios from 'axios';
import { address } from '../../config/routes';
import useError from '../logicalhooks/useError';

function useLogin() {
    const { handelError } = useError();
    const apiLogin = async (email, password) => {
        try {
            const response = await axios.post(address.LOGIN, { email, password });
            return {
                success: true,
                data: response.data, // Return the response data if needed
            };
        } catch (error) {
            const errorResult = await handelError(error);
            return errorResult;
        }
    };

    return { apiLogin };
}

export default useLogin;
