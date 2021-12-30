export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
}
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}