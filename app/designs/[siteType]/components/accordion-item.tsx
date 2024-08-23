import React, { useRef } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import "./accordion-item.css";
type AccordionItemProps = { id: number; title: string; text: string };
function AccordionItem({
  items,
  onClick,
  isOpen,
}: {
  items: AccordionItemProps;
  onClick: (index: number) => void;
  isOpen: boolean;
}) {
  const contentHeight = useRef<any>();
  return (
    <div className="wrapper overflow-hidden">
      <div
        className={`item-container ${isOpen ? "active" : ""}`}
        onClick={() => onClick(items.id)}
      >
        <p className="p-2">{items.title}</p>
        <TiArrowSortedDown
          className={`text-2xl arrow ${isOpen ? "active" : ""}`}
        />
      </div>

      <div
        ref={contentHeight}
        className="item-text-container"
        style={
          isOpen
            ? { height: contentHeight.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="item-text-content">{items.text}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
