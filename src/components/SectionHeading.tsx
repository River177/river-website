import type { ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";

type SectionHeadingProps = {
  id: string;
  title: string;
  icon: ComponentType<IconProps>;
};

export function SectionHeading({ id, title, icon: Icon }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <Icon size={24} weight="regular" aria-hidden="true" />
      <h2 id={`${id}-heading`}>{title}</h2>
    </div>
  );
}
