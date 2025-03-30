import React from "react";
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  price?: string;
};

export default function ServiceCard({
  id,
  title,
  description,
  imageUrl,
  linkUrl,
  price,
}: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-card-image">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="service-image"
        />
      </div>
      <div className="service-card-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        {price && <p className="service-price">{price}</p>}
        <Link href={linkUrl} className="service-link">
          Learn More
        </Link>
      </div>
    </div>
  );
}
