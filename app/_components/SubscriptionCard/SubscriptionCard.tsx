import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MdPeopleOutline } from "react-icons/md";

const SubscriptionCard = () => {
  return (
    <Card className="h-full w-[250px]">
        <CardHeader className="flex flex-row justify-between">
            <h4 className="text-xl">Subcriptions</h4>
            <MdPeopleOutline />
        </CardHeader>
        <CardContent className="flex mb-1">
            <p className="font-bold text-4xl">+ 2350</p>
        </CardContent>
        <CardFooter>
            <p className="text-sm">+180.1% from last month</p>
        </CardFooter>
    </Card>
  )
}

export default SubscriptionCard