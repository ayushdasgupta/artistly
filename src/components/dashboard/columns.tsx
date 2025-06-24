export type Artist = {
  id: string
  name: string
  category: string
  location: string
  feeRange: string
  bookingCount?: number 
}

export type Column<T> = {
  header: string
  cell: (row: T) => React.ReactNode
}

export const columns: Column<Artist>[] = [
  { header: "Name", cell: (row) => row.name },
  { header: "Category", cell: (row) => row.category },
  { header: "Location", cell: (row) => row.location },
  { header: "Fee Range", cell: (row) => row.feeRange },
  {
    header: "Bookings",
    cell: (row) => (
      <span className="font-medium text-blue-600 dark:text-blue-400">
        {row.bookingCount || 0}
      </span>
    ),
  },
  {
    header: "Actions",
    cell: (row) => (
      <button
        onClick={() => alert(`Viewing ${row.name}`)}
        className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
      >
        View
      </button>
    ),
  },
]
