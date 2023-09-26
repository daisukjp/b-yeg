const StyledImage: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => (
  <div style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}>
    <figure
      style={{
        gap: "0.5rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          borderRadius: "10px",
          border: "0.1px solid #e5e7eb",
          backgroundColor: "#f3f3f3",
          color: "transparent",
          maxWidth: "none",
        }}
        width="1000"
        height="800"
        className="w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none animate-in"
      />
    </figure>
  </div>
);

export default StyledImage;