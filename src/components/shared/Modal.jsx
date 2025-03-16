import { cloneElement, useContext, useState } from "react";
 import { createPortal } from "react-dom";
 import { HiXMark } from "react-icons/hi2";
 import { createContext } from "react";
 import { useOutsideClick } from "../../hooks/useOutsideClick";
 
 const ModalContext = createContext();
 
 const Modal = ({ children }) => {
   const [openName, setOpenName] = useState("");
 
   const close = () => setOpenName("");
   const open = setOpenName;
 
   return (
     <ModalContext.Provider value={{ openName, close, open }}>
       {children}
     </ModalContext.Provider>
   );
 };
 
 const Open = ({ children, opens }) => {
   const { open } = useContext(ModalContext);
 
   return cloneElement(children, { onClick: () => open(opens) });
 };
 
 const Window = ({ children, name }) => {
   const { openName, close } = useContext(ModalContext);
   const ref = useOutsideClick(close);
 
   if (name !== openName) return null;
 
   return createPortal(
     <div className="fixed top-0 left-0 w-full h-screen bg-dark-opacity-10 backdrop-blur-sm z-50 transition-all duration-300">
       <div
         className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-dark-2 rounded-lg py-12 px-16 transition-all duration-500"
         ref={ref}
       >
         <button
           className="p-2 rounded-sm translate-x-[0.8rem] transition-all duration-300 absolute top-[1.2rem] right-[1.9rem] hover:bg-light-opacity-10"
           onClick={close}
         >
           <HiXMark />
         </button>
 
         <div>{cloneElement(children, { onCloseModal: close })}</div>
       </div>
     </div>,
     document.body
   );
 };
 
 Modal.Open = Open;
 Modal.Window = Window;
 
 export default Modal;