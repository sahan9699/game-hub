import { Image, ImageProps } from '@chakra-ui/react';
import bulleye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbs from '../assets/thumbs-up.webp';

interface Props {
    rate: number
}
const Emoji = ({rate}: Props) => {
  if(rate < 3) return null;

  const emojiMap:{[key: number]: ImageProps} = {
    3: {src: meh, alt: 'meh' , boxSize:'25px'},
    4: {src: thumbs, alt: 'recommended', boxSize:'25px'},
    5: {src: bulleye, alt: 'exceptional', boxSize:'35px'}
  }
  return (
    <Image {...emojiMap[rate]} marginTop={1} />
  )
}

export default Emoji