import { Container, Grid, classed } from '@/src/react'

const GridColumn = classed('div', 'bg-[#f0f] opacity-10 h-full')

export function GridOverlay() {
  return (
    <div className="pointer-events-none absolute z-50 top-0 w-full h-full">
      <Container className="relative h-full">
        <Grid className="h-full md:hidden">
          <GridColumns count={6} />
        </Grid>
        <Grid className="h-full hidden md:grid">
          <GridColumns count={12} />
        </Grid>
      </Container>
    </div>
  )
}

export function GridColumns({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        // eslint-disable-next-line @eslint-react/no-array-index-key
        <GridColumn key={i} />
      ))}
    </>
  )
}
