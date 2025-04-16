

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
        <ShoppingHeader/>
        <main classNmae="flex flex-col w-full">
            <Outlet/>

        </main>
    </div>
  )
}

export default ShoppingLayout