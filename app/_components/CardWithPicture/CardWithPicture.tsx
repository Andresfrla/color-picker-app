import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import womenSpeaking from "@/public/womenSpeaking.png"
const CardWithPicture = () => {
  return (
    <Card className="h-full bg-[#3B74D9] relative overflow-hidden">
    <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    >
    <path
      d="M 0 33 A 33 33 0 0 1 33 0"
      fill="none"
      stroke="rgba(255, 255, 255, 0.2)"
      strokeWidth="2"
    />
    <path
      d="M 67 100 A 33 33 0 0 1 100 67"
      fill="none"
      stroke="rgba(255, 255, 255, 0.2)"
      strokeWidth="2"
    />
  </svg>
  <CardHeader>
    <CardTitle>Gain control</CardTitle>
  </CardHeader>
  <CardContent className="px-10 relative z-10">
    <Image
      src={womenSpeaking}
      className="rounded-3xl"
      alt="Women speaking"
      width={300}
      height={200}
    />
    <p className="py-10">Make thinks different</p>
  </CardContent>
</Card>
  )
}

export default CardWithPicture