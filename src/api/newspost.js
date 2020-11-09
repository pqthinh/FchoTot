const BASE_URL = `http://chotot-server.herokuapp.com`

export async function getList(page = 1) {
  const response = await fetch(`${BASE_URL}/tindang?page=${page}`)
  const photos = await response.json()
  return photos
}

export function formatPhotoUri() {
    return ;
}