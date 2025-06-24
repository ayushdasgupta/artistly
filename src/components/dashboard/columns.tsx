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
      <span className="font-medium text-blue-600">
        {row.bookingCount || 0}
      </span>
    ),
  },
  {
    header: "Actions",
    cell: (row) => (
      <button
        onClick={() => alert(`Viewing ${row.name}`)}
        className="text-sm text-gray-700 hover:text-blue-600"
      >
        View
      </button>
    ),
  },
]
