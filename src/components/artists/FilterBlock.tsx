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
      <Label className="mb-1 block text-gray-800 dark:text-gray-200">{label}</Label>
      <Select
        value={value || "all"}
        onValueChange={(val) => onChange(val === "all" ? "" : val)}
      >
        <SelectTrigger className="bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-gray-100">
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100">
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
