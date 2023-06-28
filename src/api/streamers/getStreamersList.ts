import axios from 'axios';
export const getStreamersList = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/streamers`);
    console.log('response  ', response);
    return response.data.data;
  } catch (error) {
    throw new Error('error');
  }
};
