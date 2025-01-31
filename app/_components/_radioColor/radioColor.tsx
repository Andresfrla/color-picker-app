import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const RadioColor = () => {
  return (
    <div className="pt-10">
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" className="size-10"/>
        <Label htmlFor="r1" className="text-md">Color</Label>
      </div>
    </RadioGroup>
    </div>
  )
}

export default RadioColor
