import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../images/elevate-logo.png';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white w-full fixed top-0">
      {({ open }) => (
        <>
          <div className="mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="flex h-16">
              <div className="flex  w-full">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-16 mt-2 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden justify-end sm:ml-auto  sm:flex sm:space-x-20 mr-6">
                 {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className="inline-flex items-center px-1 pt-1 text-base font-semibold text-neutral-800"
                  >
                    Home
                  </a>
                  <a
                    href="/about/"
                    className="inline-flex items-center  border-transparent px-1 pt-1 text-base font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-700"
                  >
                    About
                  </a>
                  <a
                    href="/blog/"
                    className="inline-flex items-center  border-transparent px-1 pt-1 text-base font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-700"
                  >
                    Blog
                  </a>
                  <a
                    href="/tags/"
                    className="inline-flex items-center  border-transparent px-1 pt-1 text-base font-semibold text-neutral-800 hover:border-neutral-300 hover:text-neutral-700"
                  >
                    Tags
                  </a>
                </div>
              </div>
              
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-sky-500 bg-sky-50 py-2 pl-3 pr-4 text-base font-semibold text-sky-700"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/blog/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700"
              >
                Blog
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/tags/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700"
              >
                Tags
              </Disclosure.Button>
            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}