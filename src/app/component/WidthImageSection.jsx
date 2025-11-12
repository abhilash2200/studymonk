import Image from "next/image";

export default function WidthImageSection({
  src = "/assets/img/MONKS.webp",
  alt = "Image",
  height = "300px",
  width= "100%",
  objectFit = "cover",
  className = ""
}) {
  return (
    <section className={`monk ${className}`}>
      <div className="container p-0">
        <div
          className="stdyu-img"
          style={{ position: "relative", width: "100%", height }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit }}
            priority
          />
        </div>
      </div>
    </section>
  );
}