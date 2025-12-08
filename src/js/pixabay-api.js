import axios from 'axios';

export const PER_PAGE = 15;
export async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '53601919-f7ce8619a2e643043945fb1be',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: PER_PAGE,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
