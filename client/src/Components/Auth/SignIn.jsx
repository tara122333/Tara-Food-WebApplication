import { Dialog, Transition } from '@headlessui/react';
import { Fragment} from 'react';
import { FcGoogle } from "react-icons/fc";

export default function SignIn({isOpen,setIsOpen}) {
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    SignIn
                  </Dialog.Title>
                  <diV className="mt-2 flex flex-col gap-3 w-full">
                    <button className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100">
                        Signin With Google <FcGoogle />
                    </button>
                    <form className="flex flex-col gap-3">
                        <div className=" w-full flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" 
                            placeholder="tara@emai.com"
                            className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="*********"
                                name="password"
                                className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <div className="w-full  text-center bg-red-500 text-white py-2 rounded-lg">
                            Sign in
                        </div>
                    </form>
                    
                  </diV>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}