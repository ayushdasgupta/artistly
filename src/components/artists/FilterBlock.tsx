import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
  label: string
  options: string[]
  value: string
  onChange: (val: string) => void
}

export const FilterBlock = ({ label, options, value, onChange }: Props) => {
  return (
    <div>
      <Label className="mb-1 block">{label}</Label>
      <Select
        value={value || "all"}
        onValueChange={(val) => onChange(val === "all" ? "" : val)}
      >
        <SelectTrigger>
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
