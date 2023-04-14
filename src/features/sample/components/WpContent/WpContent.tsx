import { NextPage } from 'next'

interface PostItemProps {
  content: string;
}

const WpContent: NextPage<PostItemProps> = ({ content }) => {
  if (!content) return null
  return (
    <>
    <div
      className='wpContent'
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
    </>
  )
}

export default WpContent
