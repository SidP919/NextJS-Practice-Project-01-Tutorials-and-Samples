import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { useSelector, useDispatch } from 'react-redux'
import { setAlertStatus } from './../../features/alert/alertSlice'
import { Router, useRouter } from 'next/router'

export default function NotifyAlert() {
  const open = useSelector((state) => state.showCountryDetails.value.openAlert);
  const currentCountry = useSelector((state) => state.showCountryDetails.value.currentCountry);

  const dispatch = useDispatch()
  const cancelButtonRef = useRef(null)
  const router = useRouter();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={()=>dispatch(setAlertStatus(""))}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00e5ff] sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-[#00e5ff]">
                        Hey, there!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-lg text-[#00e5ff]">
                          Want to know more about country: {currentCountry}?<br/>
                          Click on More details to know more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-[#00e5ff] px-3 py-2 text-sm font-semibold text-white border-2 hover:border-[#00e5ff] hover:text-[#00e5ff] shadow-sm hover:bg-white sm:ml-3 sm:w-auto"
                    onClick={()=>{
                                dispatch(setAlertStatus(""));
                                router.push(`./countries/${currentCountry}`)
                              }
                            }
                  >
                    More details
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white hover:bg-[#00e5ff] px-3 py-2 text-sm font-bold text-[#00e5ff] shadow-sm ring-1 ring-inset ring-gray-300 hover:text-white sm:mt-0 sm:w-auto border-2 border-[#00e5ff]"
                    onClick={()=>dispatch(setAlertStatus(""))}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
