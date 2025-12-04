interface PaginationProps {
    count: number
}

const Pagination = ({ count }: PaginationProps) => {
  return (
    <div>{count}</div>
  )
}

export default Pagination