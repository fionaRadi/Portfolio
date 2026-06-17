import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";

const baseClassName =
  "group inline-flex h-11 items-center gap-2 rounded-full border border-violet-100/90 bg-white/75 px-6 py-3 text-sm font-medium text-gray-800 shadow-[0_8px_28px_rgba(139,92,246,0.1)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-white/90 hover:shadow-[0_12px_36px_rgba(139,92,246,0.18)]";

type ButtonGlassBaseProps = {
  className?: string;
  icon: ReactNode;
};

type ButtonGlassLinkProps = ButtonGlassBaseProps &
  Omit<ComponentProps<typeof Link>, "className"> & {
    download?: never;
  };

type ButtonGlassDownloadProps = ButtonGlassBaseProps &
  Omit<ComponentProps<"a">, "className"> & {
    download: string | true;
  };

type ButtonGlassProps = ButtonGlassLinkProps | ButtonGlassDownloadProps;

function ButtonGlassContent({
  children,
  icon,
}: Pick<ButtonGlassProps, "children" | "icon">) {
  return (
    <>
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-50 to-pink-50 text-violet-600 transition-colors group-hover:from-violet-100 group-hover:to-pink-100">
        {icon}
      </span>
      <span>{children}</span>
    </>
  );
}

export default function ButtonGlass({
  children,
  className,
  icon,
  download,
  ...props
}: ButtonGlassProps) {
  const classNames = className ? `${baseClassName} ${className}` : baseClassName;

  if (download !== undefined) {
    const anchorProps = props as Omit<ComponentProps<"a">, "className">;
    return (
      <a
        className={classNames}
        download={download === true ? "" : download}
        {...anchorProps}
      >
        <ButtonGlassContent icon={icon}>{children}</ButtonGlassContent>
      </a>
    );
  }

  const linkProps = props as Omit<ComponentProps<typeof Link>, "className">;
  return (
    <Link className={classNames} {...linkProps}>
      <ButtonGlassContent icon={icon}>{children}</ButtonGlassContent>
    </Link>
  );
}
