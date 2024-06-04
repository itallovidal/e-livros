import Lottie from 'react-lottie'
import loadingLottie from '../assets/looties/loadingLottie.json'
import { LoadingContainer } from '../styles/loading.ts'

export function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <LoadingContainer>
      <Lottie options={defaultOptions} height={150} width={150} />
    </LoadingContainer>
  )
}
