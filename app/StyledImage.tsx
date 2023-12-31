const StyledImage: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{
      border: "0.1px solid #e5e7eb",
      backgroundColor: "#f3f3f3",
      color: "transparent",
      maxWidth: "none",
      marginTop: "2rem",
      marginBottom: "2rem",
    }}
    width="1000"
    height="800"
    className=" StyledImage w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none animate-in"
  />
);

export default StyledImage;
