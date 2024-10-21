import Arrow from "@assets/arrow-down.svg";
import styled from "@emotion/styled";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type DropdownItemType = {
  type: string;
  text: string;
};

type DropdownProps = {
  items: DropdownItemType[];
  isOpen: boolean;
  selectedIndex: number;
  focusedIndex: number;
};

type DropdownDispatchProps = {
  setItems: Dispatch<SetStateAction<DropdownItemType[]>>;
  toggle: (force?: boolean) => void;
  selectIndex: (index: number) => void;
  focusIndex: (index: number) => void;
};

const DropdownContext = createContext<DropdownProps>({
  items: [],
  isOpen: false,
  focusedIndex: -1,
  selectedIndex: -1,
});

const DropdownDispatchContext = createContext<DropdownDispatchProps>({
  setItems: () => {},
  toggle: () => {},
  focusIndex: () => {},
  selectIndex: () => {},
});

const useDropdown = () => useContext(DropdownContext);

const useSetDropdown = () => useContext(DropdownDispatchContext);

const DropdownProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<DropdownItemType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, focusIndex] = useState(-1);
  const [selectedIndex, selectIndex] = useState(-1);

  const toggle = (force?: boolean) => {
    setIsOpen((prev) => (typeof force === "boolean" ? force : !prev));
  };

  return (
    <DropdownContext.Provider
      value={{ items, isOpen, focusedIndex, selectedIndex }}
    >
      <DropdownDispatchContext.Provider
        value={{ setItems, toggle, focusIndex, selectIndex }}
      >
        {children}
      </DropdownDispatchContext.Provider>
    </DropdownContext.Provider>
  );
};

const DropdownContainer = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

const DropdownTrigger = ({
  defaultText,
  iconSrc,
}: {
  defaultText: string;
  iconSrc: string;
}) => {
  const { selectedIndex, items } = useDropdown();
  const { toggle } = useSetDropdown();
  const selectedItem = items[selectedIndex];

  return (
    <TriggerButton onClick={() => toggle()}>
      <IconWrapper>
        <img src={iconSrc} alt={defaultText} />
      </IconWrapper>
      {selectedItem?.text || defaultText}
      <IconWrapper>
        <img src={iconSrc} alt={defaultText} />
      </IconWrapper>
    </TriggerButton>
  );
};

const DropdownItem = ({
  item,
  index,
}: {
  item: DropdownItemType;
  index: number;
}) => {
  const { selectedIndex, focusedIndex } = useDropdown();
  const { selectIndex } = useSetDropdown();

  return (
    <li
      role="option"
      aria-selected={selectedIndex === index}
      aria-current={focusedIndex === index}
    >
      <button onClick={() => selectIndex(index)}>{item.text}</button>
    </li>
  );
};

const DropdownList = () => {
  const { items } = useDropdown();

  return (
    <ul>
      {items.map((item, idx) => (
        <DropdownItem key={item.type} item={item} index={idx} />
      ))}
    </ul>
  );
};

const Dropdown = {
  Provider: DropdownProvider,
  Container: DropdownContainer,
  Trigger: DropdownTrigger,
  List: DropdownList,
  Item: DropdownItem,
};

export default Dropdown;

const Container = styled.div`
  border: solid 1px transparent;
  display: flex;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 10px 8px -10px rgba(0, 0, 0, 0.64);
  background-color: ${({ theme }) => theme.colors.highlight.primary};
`;

const TriggerButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.main.primary};
  font-weight: 700;
`;

const IconWrapper = styled.div`
  width: 15px;
  height: 15px;

  & > img {
    width: 100%;
  }
`;
