import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
const ButtonTypes = () => {
  return (
    <Card className="flex flex-col">
        <CardHeader>
            <CardTitle>Different types of Buttons</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-5">
        <Button className="w-full">
            Primary
        </Button>
        <Button className="w-full">
            Secondary
        </Button>
        <Button className="w-full">
            Ghost
        </Button>
        <Button className="w-full">
            Danger
        </Button>
        <Button className="w-full">
            Warning
        </Button>
        </CardContent>
    </Card>
  )
}

export default ButtonTypes