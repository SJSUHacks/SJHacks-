export default function Background() {
    return (
      <object
        type="image/svg+xml"
        data="/assets/design.svg"
        className="background"
        aria-label="Decorative background"
        width="120%"
        height="120%"
        style={{
          minWidth: '120vw',
          minHeight: '120vh'
        }}
      />
    )
  }