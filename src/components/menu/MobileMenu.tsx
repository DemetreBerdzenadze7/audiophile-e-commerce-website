import Categories from "../shared/Categories";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  useLockBodyScroll();

  return (
    <div
      onClick={onClose}
      className="fixed inset-x-0 bottom-0 top-22.5 z-50 overflow-y-auto bg-black/40 lg:hidden"
    >
      <nav
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-b-card"
      >
        <Categories className="pt-8 pb-9 md:pt-14 md:pb-17" onLinkClick={onClose} />
      </nav>
    </div>
  );
};

export default MobileMenu;
