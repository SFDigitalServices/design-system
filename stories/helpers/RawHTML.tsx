export function RawHTML({ children }: { children: string | null | undefined }) {
  return children ? (
    // eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml
    <div dangerouslySetInnerHTML={{ __html: children }} />
  ) : null
}
