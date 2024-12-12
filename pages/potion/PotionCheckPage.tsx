import { Camera, useCameraDevice, useFrameProcessor } from "react-native-vision-camera";
import { TopBarContainer } from "../../props";

export function PotionCheckPage() {
  const device = useCameraDevice('back')

  const frameProcessor = useFrameProcessor(frame => {
    'worklet'
    console.log(`Frame: ${frame.width}x${frame.height} (${frame.pixelFormat})`)
  }, [])

  return (
    <TopBarContainer text='잔량 확인'>
      <Camera device={device} frameProcessor={frameProcessor} />
    </TopBarContainer>
  )
}