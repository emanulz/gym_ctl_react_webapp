import { User } from 'app/types/user'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse<User>) {
  const username: string = req.body.user
  const pw: string = req.body.pw

  const user = {
    id: '1',
    token: 'ABCDEFG',
    firstName: 'Shu',
    avatar: 'https://github.com/shuding.png',
  }

  if (username === 'emanuelziga' && pw === 'emma101421') {
    res.status(200).json(user)
  } else {
    res.status(401)
  }
}
