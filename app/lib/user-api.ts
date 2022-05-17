import { User } from 'app/types/user'

// mock the user api
const userApi = async (): Promise<User> => {
  // sleep 500
  await new Promise((res) => setTimeout(res, 500))

  if (document.cookie.includes('swr-test-token=swr')) {
    // authorized
    return {
      id: '1',
      token: 'ABCDEFG',
      firstName: 'Shu',
      avatar: 'https://github.com/shuding.png',
    }
  }

  // not authorized
  const error = new Error('Not authorized!')
  throw error
}

export default userApi
