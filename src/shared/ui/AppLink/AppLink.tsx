import { FC, ReactNode } from "react";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

interface IAppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  accent?: AppLinkAccent;
  isActive?: boolean;
}

export enum AppLinkAccent {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum AppLinkModifiers {
  ACTIVE = "active",
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    isActive,
    accent = AppLinkAccent.PRIMARY,
    ...otherProps
  } = props;
  console.log(otherProps);

  return (
    <Link
      to={to}
      className={classNames(cls.applink, [className, cls[accent]], {
        [cls[AppLinkModifiers.ACTIVE]]: isActive,
      })}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
