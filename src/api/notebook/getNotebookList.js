import api from 'api/axios';

const getNotebookList = async ({ currentPage }) => {
  try {
    const response = await api.get(
      `notebooks/read/${currentPage}?filterBy=none&selected=&onlyAvailable=false`,
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export default getNotebookList;
