const url = 'https://www.course-api.com/react-tours-project';

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.data);
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'There was an error ...';
    console.log(errorMsg);
    return [];
  }
}

fetchData(url);
