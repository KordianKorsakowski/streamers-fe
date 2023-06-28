import axios from 'axios';
export const getStreamer = async (id: number) => {
  try {
    const response = await axios.get(`http://localhost:5000/streamers/${id}`);
    console.log('response  ', response);

    return response.data.data;
  } catch (error) {
    throw new Error('error');
  }
};
