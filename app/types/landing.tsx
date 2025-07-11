export interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

export interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

export interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

export interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface ButtonProps {
  name: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'navbar'; // ✅ Add variant
}
