import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import manReading from "@/public/manReading.png"
const CardWithPicture2 = () => {
  return (
    <Card className="h-full bg-[#94C5FF] relative overflow-hidden text-black">
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
        <CardTitle>Research and Investigation</CardTitle>
    </CardHeader>
    <CardContent className="px-10 relative z-10">
    <Image
      src={manReading}
      className="rounded-3xl"
      alt="Man reading"
      width={300}
      height={200}
    />
    <p className="py-10">
        Try to learn new things
    </p>
    </CardContent>
    </Card>
  )
}

export default CardWithPicture2