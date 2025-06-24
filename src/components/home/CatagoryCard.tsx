import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

type Props = {
  title: string
  icon: LucideIcon
  color?: string
}

export const CategoryCard = ({ title, icon: Icon, color = "text-blue-600" }: Props) => {
  return (
    <Card className="hover:shadow-lg transition bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100">
      <CardContent className="flex flex-col items-center py-6 gap-4">
        <Icon className={`w-10 h-10 ${color}`} />
        <h4 className="text-lg font-medium">{title}</h4>
      </CardContent>
    </Card>
  )
}
