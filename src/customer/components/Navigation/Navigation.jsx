import { Fragment, useState } from 'react'
import {
  Dialog,
  Popover,
  Tab,
  Transition,
  DialogBackdrop,
  DialogPanel,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
  Button
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {navigation} from "./navigationData"
import { Avatar,Menu,MenuItem} from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
function ClassNames(...classes){
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const[openAuthModal,setOpenAuthModal] = useState(false);
  const [anchorE1, setAnchorE1] = useState(null);
  const openUserMenu=Boolean(anchorE1);
  const jwt = localStorage.getItem("jwt");

  const handleUserClick = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorE1(null);
  }

  const handleOpen = () => {
    setOpenAuthModal(true);
  }

  const handleCategoryClick = (category,section,item,close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`)
    close();
  }



  return (
    <div className="bg-white z-50">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
                          </div>
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                
                  <span className="sr-only">Your Company</span>
                  <img
                  className="h-8 w-8 mr-2"
                    alt="ShopwithVaibhav"
                    src="https://i.pinimg.com/originals/63/d9/1f/63d91f8fe7dacece85d70d7833dff18e.jpg"

                  />
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      
                        {({open , close})=> (
                          <>
                          <div className="relative flex">
                          <Popover.Button
                          className={ClassNames(
                            open ? "border-indigo-600 text-indigo-600"
                            :"border-transparent text-gray-700 hover:text-gray-800",
                            "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium"
                          )}>
                            {category.name}
                          </Popover.Button>
                      </div>
                      <Transition 
                      as={Fragment}
                      enter = "transition ease-out duration-200"
                      enterFrom='opacity-0'
                      enter-To="opacity-100"
                      leave = "transition ease-in duration-150"
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                      >
                      <Popover.Panel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>  
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <p
                                          onClick={() =>
                                            handleCategoryClick(
                                              category,
                                              section,
                                              item,
                                              close

                                            )
                                          }
                                          className='cursor-pointer hover:text-gray-800'
                                          >
                                            {item.name}
                                          </p>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                      </Transition>
                      </>
                        )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {true ? (
                    <div>
                      <Avatar
                      className='text-white'
                      onClick={handleUserClick}
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open? "true":undefined}

                      sx={{
                        bgcolor:deepPurple[500],
                        color:"white",
                        cursor:"pointer"
                      }}
                      >
                        V
                      </Avatar>
                      <Menu
                      id="basic-menu"
                      anchorE1 = {anchorE1}
                      open={openUserMenu}
                      onClose={handleCloseUserMenu}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                        Profile</MenuItem>
                        <MenuItem onClick={()=>navigate("/account/order")}>My Orders</MenuItem>
                        <MenuItem>Logout</MenuItem>
                      </Menu>
                    </div>
                    ):(
                      <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Signin 
                      </Button>
                    )}
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <p className='p-2 text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Search</span>
                    <MagnifyingGlassIcon
                    className='h-6 w-6'
                    aria-hidden="true"
                    />
                  </p>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button
                  className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                    className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                    aria-hidden="true"
                    />
                    <span className='ml-2 text-sm font-medium text-gray-700
                    group-hover:text-gray-800'>
                      2
                    </span>
                  <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
