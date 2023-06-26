import axios from 'axios';
export const getStreamer = async (id: number) => {
  try {
    const response = await axios.get(`http://localhost:5000/streamers/${id}`);
    console.log('response  ', response);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('error');
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
