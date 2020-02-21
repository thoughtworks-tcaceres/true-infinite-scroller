import React, { forwardRef, useEffect, useRef } from "react";
import "./InfiniteScroller.scss";

const InfiniteScroller = forwardRef((props, ref) => {
  const { children, fetchFunc } = props;
  const divRef = useRef(null);

  const scrollHandler = () => {
    fetchFunc();
    divRef.current.scrollTop = divRef.current.scrollHeight;
  };

  useEffect(() => {
    const reference = divRef.current;
    reference.addEventListener("scroll", scrollHandler);
    return () => reference.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div ref={divRef} className={"infiniteScroller"}>
      {children}
    </div>
  );
});

export default InfiniteScroller;
