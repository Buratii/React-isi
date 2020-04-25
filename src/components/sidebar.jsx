import React, { useRef } from "react";
import { useTransition, useChain, animated, config } from "react-spring";
import "./sidebar.scss";

function Sidebar({ show }) {
  const sidebarRef = useRef();
  const transition = useTransition(show, null, {
    from: {
      transform: "translateX(-100%)"
    },
    enter: {
      transform: "translateX(0)"
    },
    leave: {
      transform: "translateY(-100%)"
    },
    unique: true,
    config: config.stiff,
    ref: sidebarRef
  });

  const items = ["Home", "Análise de Dados", "Processos", "Sistema"];
  const itemsRef = useRef();
  const trail = useTransition(show ? items : [], item => item, {
    from: {
      opacity: 0,
      transform: "translateX(50px)"
    },
    enter: {
      opacity: 1,
      transform: "translateX(0)"
    },
    leave: {
      opacity: 0,
      transform: "translateX(-25px)"
    },
    ref: itemsRef,
    config: config.wobbly,
    trail: 100,
    unique: true
  });

  useChain(
    show ? [sidebarRef, itemsRef] : [itemsRef, sidebarRef],
    show ? [0, 0.25] : [0, 0.6]
  );
  return transition.map(({ item, key, props }) =>
    item ? (
      <animated.div key={key} style={props} className="sidebar">
        {trail.map(({ item, key, props }) => (
          <animated.div key={item} style={props} className="sidebar__item">
            {item}
          </animated.div>
        ))}
      </animated.div>
    ) : null
  );
}
export default Sidebar;
