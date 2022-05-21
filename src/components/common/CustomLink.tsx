import { useRouter } from "next/router";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";

interface NavLinkProps {
  href: string;
  as: string;
  children: React.ReactNode;
}

const NavLink = ({ href, as, children }: NavLinkProps) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Link href={href} as={as} passHref>
      <MuiLink
        className={`nav-link ${
          encodeURIComponent(asPath) === encodeURIComponent(as) && `active`
        }`}
      >
        {children}
      </MuiLink>
    </Link>
  );
};

export default NavLink;
