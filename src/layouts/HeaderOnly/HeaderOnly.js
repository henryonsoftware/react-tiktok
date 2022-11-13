import Header from '~/layouts/components/Header'

function HeaderOnly({ children }) {
  return (
    <div className="flex flex-col items-center">
      <Header wider={true} />
      <div className="max-w-full w-full mt-16">{children}</div>
    </div>
  )
}

export default HeaderOnly
