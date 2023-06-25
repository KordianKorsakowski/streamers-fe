import axios from 'axios';
export const getStreamersList = async () => {
  const response = await axios.get(`http://localhost:5000/streamers`);
  console.log(response);
};
