function SidebarAccountSpinner({ label }) {
  return (
    <div className="fixed bg-white" style={{ top: '252px' }}>
      <p className="hidden md:block py-0 px-2 mb-2 text-sm font-primary text-black/60">{label}</p>

      <div className="md:w-60 lg:w-80 rounded-md max-w-sm w-full mx-auto">
        <div className="py-3 px-2 animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 w-8 h-8"></div>
          <div className="hidden md:block flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 px-2 animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 w-8 h-8"></div>
          <div className="hidden md:block flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 px-2 animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 w-8 h-8"></div>
          <div className="hidden md:block flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 px-2 animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 w-8 h-8"></div>
          <div className="hidden md:block flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 px-2 animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 w-8 h-8"></div>
          <div className="hidden md:block flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex py-3 px-2 animate-pulse space-x-4">
        <div className="h-2 bg-slate-200 rounded w-14"></div>
      </div>
    </div>
  )
}

export default SidebarAccountSpinner
