import { Dialog } from '@headlessui/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export const Modal = ({children, isOpen, setIsOpen}) => {
  const { products } = useSelector((state) => state.product);


 return (
   <Dialog
     open={isOpen}
     onClose={() => setIsOpen(false)}
     className="relative z-50"
   >
     <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[#00000091] ">
       <Dialog.Panel className="w-full max-w-sm rounded p-6 bg-white overflow-auto h-[80vh]  ">
         <Dialog.Title>Complete your order</Dialog.Title>

         {children}
       </Dialog.Panel>
     </div>
   </Dialog>
 );
}
